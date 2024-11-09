# File Deletion Flow Documentation

## Overview
This document provides a comprehensive breakdown of the file deletion process, detailing component interactions, state management, and data flow in the application.

## Components Hierarchy
```
FilemanView.vue (Parent)
    └── FilesManCard.vue
        ├── FileManGrid.vue
        ├── FileManList.vue
        └── FileDeleteCard.vue (Modal)
```

## Detailed Process Flow

### 1. Initial File Selection (Grid/List View)
#### In FileManGrid.vue or FileManList.vue:
1. User checks file checkbox
2. `handelFileDetails('fileDelete', index, file)` is triggered
3. Process:
   - Toggles `file.isSelected` state
   - Updates local `currentPopupFileDetails` array:
     ```js
     if (fileIndex === -1 && file.isSelected) {
       currentPopupFileDetails.value.push(file);
     } else if (!file.isSelected) {
       currentPopupFileDetails.value.splice(fileIndex, 1);
     }
     ```
4. Emits updated selection to FilesManCard via `sendToParent()`
   ```js
   emit("sendToParent", currentPopup, currentPopupFileDetails);
   ```

### 2. Selection Management (FilesManCard)
1. Receives selection update via `handelDataFromFileManGrid/List`:
   ```js
   if (data1.value === "fileDelete") {
     currentPopupFileDetails.value = data2.value;
     currentFilesLength.value = data2.value.length;
   }
   ```
2. Updates delete button visibility based on `currentFilesLength > 0`

### 3. Delete Button Activation
1. User clicks delete button
2. `handelDataDeletePopup('fileDelete')` triggers if `currentFilesLength > 0`:
   ```js
   currentPopup.value = name;
   sendToParent(); // Shows FileDeleteCard
   ```

### 4. Delete Confirmation Modal (FileDeleteCard)
1. Modal displays with computed selectedFiles:
   ```js
   const selectedFiles = computed(() => props.currentDisplayFileData || []);
   ```
2. On confirm:
   ```js
   emit("deleteConfirmed", 
     { value: "confirmDelete" }, 
     { value: selectedFiles.value }
   );
   ```

### 5. Parent Handling (FilemanView)
1. Receives confirmation via `handleDeleteConfirmed`:
   ```js
   filesToDelete.value = data2.value;
   popupDisplayName.value = 'none';
   ```

### 6. Deletion Process (FilesManCard)
1. Watches for `itemsTodelete` changes:
   ```js
   watch(() => props.itemsTodelete, (newValue) => {
     if (newValue?.length > 0) {
       handleDeleteFiles();
     }
   }, { deep: true });
   ```

2. `handleDeleteFiles` execution:
   ```js
   // Set deletion mode
   currentPopup.value = 'fileDelete';
   
   // Remove files
   fileData.value = fileData.value.filter(file => {
     return !props.itemsTodelete.some(selected => selected.id === file.id);
   });
   
   // Reset remaining files
   fileData.value.forEach(file => {
     file.isSelected = false;
   });
   ```

### 7. Reset Chain
1. FilesManCard initiates reset:
   ```js
   // Reset states
   currentPopupFileDetails.value = [];
   currentFilesLength.value = 0;
   currentPopup.value = '';
   
   // Trigger child resets
   resetSelection.value = true;
   nextTick(() => {
     resetSelection.value = false;
   });
   ```

2. Grid/List components watch for reset:
   ```js
   watch(() => props.resetSelection, (newValue) => {
     if (newValue) {
       currentPopupFileDetails.value = [];
       currentPopup.value = "";
     }
   });
   ```

3. FilemanView final cleanup:
   ```js
   filesToDelete.value = [];
   popupFileData.value = [];
   popupDisplayName.value = 'none';
   ```

## State Management Details

### FilemanView States
- `popupDisplayName`: Controls modal visibility
- `popupFileData`: Holds selected file data
- `filesToDelete`: Tracks files to be deleted
- `dataFromCalendar`: Calendar integration data

### FilesManCard States
- `currentPopup`: Tracks popup state
- `currentPopupFileDetails`: Selected files array
- `currentFilesLength`: Selection count
- `fileData`: Main file data store
- `resetSelection`: Child reset trigger

### Grid/List Component States
- `currentPopup`: Local popup state
- `currentPopupFileDetails`: Local selection tracking
- `file.isSelected`: Individual file selection state

## Event Chain
```
User Selection → Grid/List (handelFileDetails)
       ↓
FilesManCard (handelDataFromFileManGrid/List)
       ↓
Delete Button → FileDeleteCard (confirmDelete)
       ↓
FilemanView (handleDeleteConfirmed)
       ↓
FilesManCard (handleDeleteFiles)
       ↓
Reset Chain (resetSelection)
       ↓
Completion (onDeleteComplete)
```

## Error Prevention & Validation
1. Selection Validation
   - Checks `currentFilesLength > 0` before enabling delete
   - Validates array structures in watch handlers
   - Ensures proper data types in props

2. State Synchronization
   - Uses `nextTick` for reset timing
   - Coordinated reset chain across components
   - Complete state cleanup after operations

3. Component Communication
   - Structured event emission with type checking
   - Validated data passing through props
   - Clear parent-child relationships
   - Logging for debugging and tracking
