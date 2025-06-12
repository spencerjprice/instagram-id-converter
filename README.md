# Instagram ID Converter
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A lightweight utility to convert between Instagram's internal IDs and URL segments. This tool helps developers work with Instagram's different ID formats seamlessly.

## 🤔 Why?

Instagram uses two different ID formats for their posts:
- URL segment format (e.g., `5n7dDmhTr3`) - Used in public URLs
- Internal ID format (e.g., `1038059720608660215`) - Used in their API

These IDs are actually interconvertible! This utility provides simple functions to convert between these formats, making it easier to work with Instagram's ecosystem.

## 🚀 Installation

```bash
npm install instagram-id-converter
```

## 📖 Usage

### JavaScript (ES6+)
```javascript
import { instagramIdToUrlSegment, urlSegmentToInstagramId } from 'instagram-id-converter';

// Convert internal ID to URL segment
console.log(instagramIdToUrlSegment('1038059720608660215')); // Output: 5n7dDmhTr3

// Convert URL segment to internal ID
console.log(urlSegmentToInstagramId('5n7dDmhTr3')); // Output: 1038059720608660215
```

### JavaScript (CommonJS)
```javascript
const { instagramIdToUrlSegment, urlSegmentToInstagramId } = require('instagram-id-converter');

// Convert internal ID to URL segment
console.log(instagramIdToUrlSegment('1038059720608660215')); // Output: 5n7dDmhTr3

// Convert URL segment to internal ID
console.log(urlSegmentToInstagramId('5n7dDmhTr3')); // Output: 1038059720608660215
```

⚠️ **Important**: Always pass IDs as strings to prevent numerical precision issues.

## 🛠️ API

### `instagramIdToUrlSegment(id: string): string`
Converts an Instagram internal ID to its URL segment format.

### `urlSegmentToInstagramId(segment: string): string`
Converts an Instagram URL segment to its internal ID format.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/spencerprice/instagram-id-converter/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.