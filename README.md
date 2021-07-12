# ts-utils
Typescript Utility Functions Collection

## Notes
For extensions make sure to import extension files at app start and reference the global type declaration

Example:
```
/// <reference path="app/core/extensions/global.d.ts" />
import '../extensions/dataview.extensions';
import '../extensions/array.extensions';
```