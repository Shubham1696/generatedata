export default {
	"NAME": "Tree (parent row ID)",
	"DESC": "This data type lets you generate tree-like data in which every row is a child of another row - except the very first row, which is the trunk of the tree.",
	"auto_increment_row_num": "Auto-increment row number:",
	"help_1": "This data type lets you generate tree-like data in which every row is a child of another row - except the very first row, which is the trunk of the tree. This data type must be used in conjunction with the Auto-Increment data type: that ensures that every row has a unique numeric value, which this data type uses to reference the parent rows.",
	"help_2": "The options let you specify which of your form fields is the appropriate auto-increment field and the maximum number of children a node may have.",
	"invalid_parent": "[invalid parent]",
	"max_num_sibling_nodes": "Max number of sibling nodes:",
	"invalid_fields": "Please only numbers for the Tree Data Type field settings. Please fix rows: "
};
