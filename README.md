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

It will then be possible for business advisors to log in to the email dashboard, see all of the 'emails' that have been uploaded and to make updates/delete via the dashboard. Emails can be filtered by any of the columns and also by whether or not the 'date of email' has passed. Data from the dashboard can also be exported in CSV format.

### Sending the emails

When it is the 'date of email' at 10am, the webapp will send an email that has its text and layout defined by the campaign, to the email specified, addressed to the recipient specified. There is also the opportunity to insert some variables (which can differ between campaigns) such as a link to an image or a message that needs to be customised.

### The Design Sprint

It is highly unlikely that all of these features will be completed within the 4 day design sprint. The aim of that sprint should be to produce enough so that the business advisors can get a good idea of how the app will work and whether or not it will be useful.

### MVP

The Minimum Viable Product that will be produced following the second two-week sprint must be able to collect data on how many SMEs open the emails they are sent and how many of them click the links in the emails. If the emails are of value to the SMEs then a proportionally larger number of them will open emails than the existing baseline. For example, if Wales Co-op is currently getting an open rate of 20% (we will have to liaise with the marketing team to get this data), then the targeted emails should be getting 40% open rate and a higher click through rate. This will prove the value hypothesis (that SMEs derive value from these emails).

### Next steps following MVP

If the value hypothesis has been proven then the targeted engagement tool could be built upon by combining other types of engagement, such as automated text messages (cheap), letters (a bit pricey), or calls from advisors (very expensive!). This is the 'killer function' of the tool. It can combine multiple forms of contact into an engagement to produce better results. Approaching potential customers multiple times and from multiple directions can be very effective at converting potential interest into an actual sale.

### Tech stack

* Webapp hosted on Heroku (or paid service) which has the email dashboard
* Postgres database hosted on Heroku/AWS (encrypted)
* CSV upload library which sends data to database
* Email server hosted on Heroku (or paid service) which scans the database every day to see if it needs to send emails
* Mailgun (or other) API to send emails

### Problems

* The emails will not be coming from Wales Co-op so they will possibly be marked as spam quite a lot. The server we send them from might not have a high enough reputation for the emails to get through.
* It is not possible to run an email campaign to small businesses from cloud servers. These IPs (the data centres) serve large numbers of companies, many of which are spammers or have a low reputation. As a result most email providers, especially providors of enterprise email services, will block emails from these IPs. The options for dealing with this are all things that we have not dealt with:
 * Option 1: Set up a dedicated email server in FAC or another location and build up its reputation over time.
 * Option 2: Use Wales Co-op's servers.
 * Option 3: Buy some dedicated server space in a place that guarantees high reputation.
* Formatting the emails in a way that looks professional (for example with image footers) might be very difficult and would need to be checked for every campaign. Presentation is very important and FAC will probably only be able to send basic text emails.
* The app in its current for would require setting up three separate services which may not be able to talk to each other that easily.
* Founders and Coders will not be able to complete the task in a way which allows Wales Co-op to prove or disprove the value hypothesis. If almost none of the emails are opened, why might that be? Because they got junked? Ignored? What if the emails had been sent from Wales Co-op's domain? Or formatted better? If it fails, we will never know why.
* Wales Co-op is in possession of the means of sending well-formatted emails from their own domain via MS Dynamics/ Outook. These tools are very well suited to this type of task.

[Github reference guide from DWLY](https://github.com/dwyl/github-reference)
