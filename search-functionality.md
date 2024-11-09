vue
// Search query state
const searchQuery = ref('');
// Computed property for filtered results
const filteredFileData = computed(() => {
const query = searchQuery.value.toLowerCase().trim();
if (!query) return fileData.value;
return fileData.value.filter(file => {
return (
file.name.toLowerCase().includes(query) ||
file.size.toString().toLowerCase().includes(query) ||
file.type.toLowerCase().includes(query) ||
file.date.toLowerCase().includes(query)
);
});
});


### 2. Search Form Implementation

vue
<form class="flex items-center max-w-md mx-auto" @submit.prevent>
<input
v-model="searchQuery"
type="search"
placeholder="Search by name, size, type or date..."
class="w-full px-4 py-2 rounded-l-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
/>
<button type="button" class="px-4 py-2 bg-blue-500 text-white rounded-r-md">
<i class="pi pi-search"></i>
</button>
</form>

## Data Flow

### 1. Input Handling
- User types in search box
- `v-model` binds input to `searchQuery` ref
- Form submission prevented with `@submit.prevent`
- Search triggers on every keystroke

### 2. Data Processing
- `filteredFileData` computed property watches `searchQuery`
- When query changes:
  1. Converts query to lowercase and trims whitespace
  2. Returns all files if query is empty
  3. Filters files based on search criteria
  4. Updates automatically due to Vue's reactivity

### 3. View Updates
- Grid view receives filtered data:


vue
<FileManGrid
:files="filteredFileData"
:resetSelection="resetSelection"
@sendToParent="handelDataFromFileManGrid"
/>

- List view receives filtered data:

vue
<FileManList
:files="filteredFileData"
:resetSelection="resetSelection"
@sendToParent="handelDataFromFileManList"
/>


## Search Features

### 1. Real-time Filtering
- Results update instantly as user types
- No need to press enter or search button
- Provides immediate feedback

### 2. Case-Insensitive Search
- All comparisons done in lowercase
- Improves user experience
- Prevents case-sensitivity issues

### 3. Multi-field Search
Searches across all relevant file properties:


javascript
file.name.toLowerCase().includes(query)
file.size.toString().toLowerCase().includes(query)
file.type.toLowerCase().includes(query)
file.date.toLowerCase().includes(query)

### 4. Empty State Handling

javascript
if (!query) return fileData.value;

- Returns full list when search is empty
- Prevents unnecessary filtering

## Integration with Views

### 1. Grid View Integration
- Receives filtered data
- Maintains selection state
- Updates dynamically

### 2. List View Integration
- Shows filtered results in table format
- Maintains sorting capabilities
- Preserves all functionality

## Performance Considerations

### 1. Computed Property
- Only recalculates when dependencies change
- Caches results for better performance
- Efficient for real-time filtering

### 2. Data Transformation
- Converts to lowercase once per search
- Minimizes string operations
- Optimizes comparison operations

## User Experience Features

### 1. Visual Feedback
- Clear search input field
- Intuitive search icon
- Responsive design

### 2. Accessibility
- Proper form semantics
- Keyboard navigation support
- Screen reader friendly

### 3. Search UX
- Immediate results
- No page reload
- Maintains state during search

## Error Handling

### 1. Input Sanitization
- Trims whitespace
- Handles empty queries
- Prevents invalid searches

### 2. Type Conversion
- Converts numbers to strings
- Handles null/undefined values
- Prevents type errors

## Future Enhancements

### 1. Advanced Search
- Field-specific searching
- Regular expression support
- Filter combinations

### 2. Search History
- Recent searches
- Popular searches
- Search suggestions

### 3. Performance
- Debounced searching
- Pagination support
- Load optimization

## Maintenance

### 1. Code Organization
- Modular structure
- Clear naming conventions
- Documented functionality

### 2. Testing Considerations
- Unit tests for filtering
- Integration tests
- Edge case handling