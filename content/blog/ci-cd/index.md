---
title: A blog with CI-CD
date: "2019-03-03"
description: Building a new blog is one thing, but it's another thing to deploy it. Gone are the old days of FTP and I shutter to think about bounding myself to a publishing system like WordPress. So to fill this gap, having a continuous integration and continuous deployment is paramount. 
---

Building a blog is one thing. Choosing the platform, the theme, customizing the theme and the experience ... all this work before you even start writing. It's daunting, for sure. For many, it's the high barrier of entry that forces people to lesser than optimal solutions. It's true, gone are the days of simple HTML and CSS with your favorite FTP tool. But even then, there was a barrier to entry that most couldn't grasp. 

But let's talk about today. FYI, this is NOT a blog post about setting up a new Gatsby blog, there are 1001 other tutorials out there. What I want to talk about here is the process for publishing your blog. 

## Command line

Ok ok ... yes, if you want to play with any of this, you need to be comfortable with the command line. 

If you are not comfortable with the command line interface (CLI), I really suggest that you do. Any level of web development will require you interacting with a command line tool once and a while. Sure there are some GUI tools available and some are really good, but IMHO, the more you are comfortable with the CLI, the more you can do with pure self reliance. 

If you need a place to start, I highly suggest this teamtreehouse.com course an [Introduction to the Terminal](https://teamtreehouse.com/library/introduction-to-the-terminal).

## Version control

Let's be frank here, if you are doing anything with web development and not using version control, e.g. Git, then what are you waiting for? 

If you are new to Git, please check out this course from teamtreehouse.com, an [Introduction to Git](https://teamtreehouse.com/library/introduction-to-git). 

It's well written and covers a lot of detail that will have you up and running with Git in no time. 

## Repository support

Ok, let's assume that you are familiar with Git and you are ready for the next step. That step being, pushing your blog code to a cloud repository like Github.

For those of you out there that are more comfortable with these resources, Github is kind of the Kleenex of repository cloud services. There is also Bitbucket, Gitlab, and AWS or Azure services as well. Pick your poison. 

But for those of you who are new to this concept, I once again recommend reviewing this teamtreehouse.com course on [Github basics](https://teamtreehouse.com/library/github-basics).

## Automated build and deployment 

This is the meat of the post here. Where many of you may have a lot of experience with Git and Github, you may not have as much experience with build pipelines and deployment scripts. 

The good news is, today this is even easier than ever before. Deploying .net apps ... ugh. Ruby apps got easier, but there was still a lot of head banging, even with the magic of Heroku. 

There is also a lot of hype about the magic of netlify and it's automated platform. It's also getting a lot of fanfare from the Gatsby community. But what if I told you that you don't need any of this. With some really simple, and free tools you can be up and running with a Continuous Integration and Continuous Delivery (CI-CD) pipeline in no time! 

### CI-CD

What is CI-CD? That's a great question. 

Before I answer this question, let's talk about what is still common today and was really common yesterday.

A legacy deployment release was a practice of building up new features over a period of time and then doing, in come cases, a monthly release. These releases were very scary as there were hundreds of lines of code changes across very complex web sites and it was basically an 'all hands on deck' scenario in case something went wrong when all that code was pushed out to the web servers. I am glad to say that I see little evidence of that still in practice across the industry, but this Kraken is yet not extinct. 

Another breed of web deployments is Continuous Delivery. This is an evolutionary step up from the legacy deployment practice that I mentioned above. What this means is that as each change is added to the release, it is tested and the build is approved for deployment at any time and there is a high level of certainty that it will be stable. But this does not mean that each change is deployed to production in real-time. There is still a large release, but it's a lot less stressful than the previous situation. 

Continuous Delivery was the precursor to Continuous Integration - Continuous Deployment. In this new scenario, with every change that is approved in code, it is tested, integrated, and deployed to the production environments. 

This in my opinion is the true nexus of web development. As work is completed, approved, tested and integrated into the master branch, it's released for deployment all at the same time. This really reduces the cognitive load for monthly or even bi-weekly releases. Granted, I agree, there are still some cases where you can't really have CI-CD, but for those cases where CI-CD is applicable, if you are not using it, why?

### Github

The key to a lot of this is getting your blog out into a repository. Now I am not telling you that you have to open source your blog, but what are you hiding? The point of a blog is to make it public and if you expose some building magic that teaches someone else how to build a blog, then isn't that worth like a million space bucks? 

And besides, it's free :)

### Surge.sh

[surge.sh](https://surge.sh/) a "_Static web publishing for Front-End Developers_"

This is a pretty bad ass hosting platform if I say so myself. 
