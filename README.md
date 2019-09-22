# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When a user enters a URL (Uniform Resource Locator), such as https://www.techtonic.com/,  into a browser, the browser displays a webpage after a brief delay.  While most people never stop to consider how this works, numerous steps are required in order to accomplish this task.  

The first step is that the user's computer- the client- must contact a domain name server in order to translate the domain name from the URL to an Internet Protocol (IP) address.  The IP address is unique to the server that hosts the website.  The user’s browser will initially contact the ISP DNS server (Internet Service Provider Domain Name Server), unless they have configured their browser to contact a different DNS server, such as a free public DNS server.  If the DNS server has the domain name stored in its cache, then it will respond to the request by sending the IP address associated with (in this case) https://www.techtonic.com/ back to the client.  

In the case that the ISP DNS server does not have the IP address stored, it will send a query to a root DNS server.  Each root DNS server actually consists of a server cluster with many individual servers all located at a single IP address and operated by a single company.  The root DNS server responds to the query by sending what is called a referral response, which is a list of Top-Level Domain (TLD) servers that serve the TLD specified in the URL back to the ISP DNS server.  Top-Level Domains are the highest level of the domain name, and can be generic (.com, .org, .edu, .net, .gov) or country-specific (.us, .au, .uk).  Upon receipt of the TLD server list from the root DNS server, the ISP DNS server then sends a query for the domain name to one of these TLD servers.  

The TLD server, in turn, answers the query by providing another referral response that contains the IP address of the authoritative name server for the DNS zone containing the specific domain.  Authoritative name servers have the domain names for their zones installed in their configuration system.  The authoritative name server then responds to the query by sending the IP address for the target server for the specified website (in this example, https://www.techtonic.com/) to the ISP DNS server.  The ISP DNS server stores the IP address for the URL in its cache and sends the IP address to the client.

The client's browser then contacts the target server using the IP address from the DNS servers to send an HTTP (HyperTextTransfer Protocol) GET request.  The target server responds by sending the HTML, CSS, JavaScript, and media files needed to render the website back to the browser.  The steps involved in this final stage are discussed in more detail in the next question.


## From start to finish, how does data reach you to be rendered in the browser?

When a client tries to access a webpage, the client and server complete a HTTP GET request/response communication in order to allow the user to view the webpage.  The networking layer of the client’s browser sends an HTTP GET request to the target server using the IP address it obtained by contacting the DNS servers (explained above).  The request includes the type of request (GET), the host website and the URL of the target resource, any applicable URL parameters, the specific protocol version used for the request, and information on the client browser, such as the browser name and version number (User-Agent), the format of compressed information that the browser can read (Accept-Encoding), the character set(s) used by the browser, and the webpage from which the user was directed to the requested resource.  All of this information is stored in the headers for the request.  If actual content is sent along with the request, this content is located in the optional body of the request.

The server replies with an HTTP response message.  Like the HTTP request message, the response message contains a great deal of information in the headers.  The first line provides the specific protocol used for the data transfer followed by a status code.  Code 200 OK means that the request was successful and the response message contains the requested content.  Code 401 indicates that the user is unauthorized to view the requested page, that the credentials were entered incorrectly, or that the browser cannot correctly communicate the credentials to the server.  Code 404 means that the requested resource was not found.  Other codes also exist; for example, codes 301 and 302 redirect the browser to a different URL.  

Assuming that the request was successful (code 200), the headers that follow the first line contain information on the server and the webpage or file.  The HTML for the webpage is provided in the body of the response message.  Alternatively, to send larger amounts of data, the server may use chucked transfer encoding, in which the server sends data to the client in small pieces called packets to improve the speed at which webpages load for multiple users simultaneously.


## What code is rendered in the browser?

Upon receipt of an HTTP response message with a status code of 200 OK, the component of software in the browser responsible for rendering webpages- the browser’s rendering engine- begins to parse the HTML code.  To accomplish the parsing, it completes a process called tokenization, in which the rendering engine creates a ‘token’ from each HTML tag.  The token will have properties depending on the type of tag as well as the attributes that are added to the tag in the HTML code.  Once tokenization is complete, the rendering engine uses the tokens to create nodes for each section or object in the document.  Finally, the engine creates a document object model (DOM) tree, which defines the relationships between all of the objects in the document.

Most HTML documents will reference a .css sheet for style.  Upon reaching that reference, the browser’s network layer will send an additional HTTP request for the css file to the server.  Upon receipt of the css file, the browser’s rendering engine begins to parse the file in a way that is very similar to the methods for the HTML document.  The primary difference is that that the final product of this parsing is a CSS Object Model (or CSSOM) instead of the DOM.  The rendering engine then combines the DOM and CSSOM to create a unified render tree that tells the browser how to render all objects in the DOM on the page.  

At this point, only two steps remain.  The rendering engine will next calculate the size and position of each object in the rendering tree, starting at the coordinates (0, 0) for the top left corner of the screen and continuing recursively until all objects have been assigned a location on the page.  This step is called the layout process.  Finally, in the painting step, the rendering engine uses the attributes for each node to draw the objects on the screen.

Many webpages also contain JavaScript scripts.  The browser has a separate component called a JavaScript engine that parses any scripts that are embedded within a webpage.  Scripts may alter the HTML and/or the CSS.  Thus, unless the script has the async property, when the rendering engine encounters a script, the DOM construction stops until the script has finished executing.  In turn, the script cannot execute until the CSSOM is complete.  Thus, scripts can significantly alter performance of a webpage.

## What is the server-side code’s main function?

Server-side code is code that is executed on the server before the webpage is delivered to the client.  Thus, a user on the client-side cannot see the source code as it was before the script executed, nor can they see the code for the server-side script.  Server-side code is typically used when the client interacts with server-side objects.  These objects may include files, databases, and the server-side web application.  Dynamic requests typically require server-side code processing before they can be fulfilled.  Examples of dynamic requests include authentication of credentials to access information stored in an individual account, and requests to post information to the server to complete a transaction or modify the user’s data.  A search engine accesses a server-side database, filters the contents of the database for webpages that match the search term, and then returns a list of webpages that match the term to the client.

Server-side code may also be used to analyze the data that the server has collected about a particular user and tailor various aspects of their content to the particular user.  For example, Amazon uses server-side code to analyze a client’s browsing and buying history and provide suggestions for other items most likely to be relevant to that client.  The server may dynamically construct HTML or other products to return to the client, or it may return data in formats such as JSON or XML and allow the client-side code to render the data appropriately.  The latter option reduces both the amount of processing required of the server and the amount of data that the server must send to the client.  In summary, server-side code is primarily used to provide dynamic and customized content to its users by determining which content to send in response to requests.

## What is the client-side code’s main function?

While server-side code is more concerned with determining which content to send out in response to requests, client-side code primarily functions to define the behavior and appearance of the content when a browser renders a webpage.  This code is written in HTML, CSS, and JavaScript.  This is the code that was the focus of the programming portion of the TechTonic Pre-Work Assignment.  As we learned through these programming activities, client-side code has a great deal of control over the style and layout of webpages as well as modification of the webpage style and content after the page has loaded using JavaScript.  In contrast to server-side scripts, client-side scripts can be viewed by the user using the developer window, as can the source code prior to modification by the script.

One important change in client-side code has come with the development of extensive client-side JavaScript libraries such as jQuery, a concept called Ajax (Asynchronous JavaScript and XML) has become much more widespread.  Ajax is when a client contacts a server to directly interact with server objects without submitting a postback.  The improved client-side flexibility provided by Ajax has increased the amount of processing that client-side code handles.

## What is runtime?

A runtime system or runtime environment creates an execution model for a programming language.  The execution model defines how elements of a program written in that language behave, and so gives the application the instructions or guidelines that it needs in order to interpret the syntax of the language.  A runtime environment provides translation between a developer application, which typically uses a high-level language, and system resources such as RAM or the processor, which use binary code. Runtime environments are useful for testing and debugging of applications.

The other common use of the term runtime is the execution time for a program.  This is the time that the program is actually executing, as opposed to compile time, which is the time during which the program is compiled (converted to binary code for the machine), link time, or the time in which a linker combines the object files output by the compiler into executable files, library files, and object files, and load time, which is the time that the program loads (places the program and libraries into memory so that the program can execute).


## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

The term “instance” has many uses in computer science.  The first way in which the term ‘instance’ is used in programming is in object-oriented programming.  In this case, every object, usually occurring during the runtime or execution time of a program, is an instance.  Creating a new object, or creating a new instance, is called instantiation, which is often accomplished by running the constructor function of a class.  For example, the Image() constructor creates an HTML image element (<img>), which is a new instance.  In this sense of the word, there is a client-side instance for each object created by the combined HTML, CSS, and JS code.  These instances can also be called object instances to distinguish them from other uses of the term “instances” in computer science.  One example of how these instances relate to assets comes from the asset class in PHP, which is a set of methods for organizing and displaying the assets- such as CSS, JS, IMG, or custom tags and files- in a webpage.  Asset instances which combine particular asset files into a single object can be created through these methods.

In another sense, each copy of the rendering engine is a separate instance.  In modern search engines, each tab or window in a browser uses a separate instance of the rendering engine, which in turn accesses the client-side assets such as HTML, CSS, JavaScript, and media files.  Thus, the number of instances of the rendering engine accessing these files would be equal to the number of separate tabs and/or windows open on the client.


## How many instances of the server-side code are available at any given time?

The number of server-side instances available depends on the configuration of the server.  If the host expects to support many simultaneous client connections, running multiple instances of the server application might be necessary.  The maximum number of client connections that a single instance can support can be set in the host application.  For instance, SQL server supports 32,767 concurrent connections per SQL server instance by default, but such a heavy load may significantly impact performance and so options exist for manually reducing the number of allowable concurrent connections per instance.  To improve performance without changing the client-side code, multiple instances of the server-side application may bind to the same IP address and port.  The number of server-side instances thus would depend on the desired performance, the capability of the particular server-side application to handle large numbers of client connections, the expected traffic on the website, and the availability or limitation of host resources to increase the number of instances (e.g. Amazon offers dedicated instances with a per-instance fee).

## How many instances of the databases connected to the server application are created?

As in the last question, the answer to this question depends on the server application design.  If the server application does not use a technique called connection pooling, then each connection to the database requires its own physical connection, whether or not the user is in the process of making a call to the database.  This design maximizes performance, but greatly increases the number of physical connections needed between the server application and the databases.

In connection pooling, a single physical connection is associated with a pooled connection instance.  In this case, the pooled connection instance is used by multiple logical connection instances.  The basic idea is that many users can share a single physical connection if, as soon as one logical connection completes a call to the database, it releases the connection so that others in the same pooled instance can make calls.  Since no user is expected to make continuous calls to the database, this sharing of the pooled connection instance reduces overhead costs significantly with minimal cost to performance.  Overall, the number of logical connection instances should be equal to the number of separate concurrent users of the server application, but the number of pooled connection instances will be much lower.

## References

https://aws.amazon.com/ec2/pricing/dedicated-instances/
https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/
https://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039
https://www.codeconquest.com/website/client-side-vs-server-side/
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview
https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
https://www.dnsknowledge.com/whatis/authoritative-name-server/
https://fuelphp.com/docs/classes/asset/advanced.html
https://fuelphp.com/docs/classes/asset/usage.html
https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.1.0/com.ibm.zos.v2r1.halz002/ip_multi_srvrs_share_tcp_port.htm
https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.2.0/com.ibm.zos.v2r2.halz002/dns_auth_servers.htm
https://www.lifewire.com/database-instance-1019612
https://marksheet.io/introduction.html
https://www.mssqltips.com/sqlservertip/5766/managing-maximum-number-of-concurrent-connections-in-sql-server/
https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html
https://www.pagecloud.com/blog/website-terminology
https://www.pathinteractive.com/blog/design-development/rendering-a-webpage-with-google-webmaster-tools/
https://securitytrails.com/blog/dns-root-servers
https://www.seguetech.com/client-server-side-code/
https://www.techopedia.com/definition/5466/runtime-environment-rte
https://www.techradar.com/news/best-dns-server
https://www.w3schools.com/js/js_htmldom.asp
https://www.webnots.com/what-is-http/
https://en.wikipedia.org/wiki/Compile_time
https://en.wikipedia.org/wiki/Link_time
https://en.wikipedia.org/wiki/Linker_(computing)
https://en.wikipedia.org/wiki/Loader_(computing)
https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)
https://www.youtube.com/watch?v=JIwi6ii-rzI
