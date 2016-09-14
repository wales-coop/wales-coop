# Wales-coop targeted engagement tool

## Problem

It is important for Wales Co-op to maintain its relationship with SMEs and its repuation as being the go-to place for advice. This is important for driving small businesses towards SBW when they are looking for advice and also for Wales Co-op as they position themselves for a future where they will have to charge for advisory services. At the moment, there is a lot of already written content that if delivered in a timely fashion, SMEs might be able to get a lot of value from. However, this content is currently sequestered on the SBW or Wales Co-op websites and the number of SMEs accessing it is low.

## Solution

The targeted engagement tool gives business advisors the ability to quickly and simply set up automated emails to SMEs that point them to resources that the advisors think are pertinant. If an SME receives an email from SBW/ Wales Co-op regarding an upcoming event that contains links to material that they find useful, they are more likely to engage with SBW, and potentially more likely to pay for services in the future now that SBW/ Wales Co-op has been established as a valuable source of information.

## How to use the tool

### CSV upload

Business advisors upload the details of the clients they wish to contact to a webapp in the form of a CSV. This will have columns that look something like the following:

|First name |Last name|Company name |email address |Campaign   |Date of email |Recipiant Variable
|---        |---      |---          |---           |---        |---           |---
|Joe        |Bloggs   |Factory Inc  |joe@bloggs.com|Tax return |21/02/2017    |some variable
|etc.       |         |             |              |           |              |
|           |         |             |              |           |              |

This CSV will be uploaded to the email server's database.

### Email dashboard

It will then be possible for business advisors to log in to the email dashboard, see all of the 'emails' that have been uploaded and to make updates/delete via the dashboard. Emails can be filtered by any of the columns and also by whether or not the 'date of email' has passed.

### Sending the emails

When it is the 'date of email' at 10am, the webapp will send an email that has been defined by the campaign, to the email specified addressed to the recipient specified. There is also the opportunity to insert some variables (which can be different between campaigns) such as a link to an image.

[Github reference guide from DWLY](https://github.com/dwyl/github-reference)
