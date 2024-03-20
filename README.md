# Club Social

A social media and club management site for the software development club.

## Table of Contents

- [About](#about)
- [Contributing](#contributing)
- [License](#license)

## About

This site will prdominately be written in Laravel (a PHP framework), but future development may branch into node.js frameworks such as VUE, which Laravel is natively
compatable with. ClubSocial is inteded to help the members of the club communicate with one another and recieve news about club updates and announcements.

## Contributing

We welcome contributions from all club members at any time. Whether you're interested in coding, design, or bug reporting, your involvement is valuable to us.

### System Requirements

To work on this project, you'll need to have php installed on your computer. I reccomend this page to get you started: https://www.php.net/manual/en/install.windows.php
You will need to make a copy of the php.ini-development file included with your php install, and remove the -development part of the file extension. This "php.ini" serves
as your php configuration file.

_If you are on a windows machine, you will need to edit your system environment variables path to go to your php folder._

Inside of the php.ini, you'll need to remove the semicolon in front of the following:
* extension=curl
* extension=fileinfo
* extension=openssl
* extension=zip
* extension=pdo_mysql
* extension=pdo_sqlite
* extension=sqlite3

If you have any quesitons about the php install, email the repo's contact email.

### Pull Requests

Pull requests are encouraged for all contributions. However, please note that they will be reviewed by club leadership before merging. If your pull request is denied or requires edits, our team will provide feedback to ensure it aligns with project goals.

### Site Design

For site design contributions, please ensure that your work adheres to the design guidelines provided in the designated directory within the project. We use Adobe XD for site design, but if you prefer other tools, there are free alternatives that are compatible with XD files.

### Bug Reports

Bug reports are highly appreciated! If you encounter any issues while using the project, please report them so we can address them promptly.

### Respectful Collaboration

We value a collaborative and respectful environment within our community. Please treat all contributors with kindness and consideration.

If you have any questions or need assistance, don't hesitate to reach out to club leadership or fellow members.

## License

MIT License

Copyright (c) [2024] [IHCC Computer Software Development Club]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
