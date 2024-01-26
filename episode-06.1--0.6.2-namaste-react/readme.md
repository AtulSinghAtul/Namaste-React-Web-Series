# Episode- 06.1

## In this episode we learned how to Resolve Swiggy API Issue.

### How get live sgiggy api.

- inspect > network > choose Fetch/XHR
- **Fetch/XHR** - This will give all api call

### Config driven ui?

- This config driven ui is very flexible, I am selected location prayagraj in swiggy so it's showing me best offer near me in prayagraj but it is possible that if you are in pune or select the very small town so you not might see any best offer in swiggy app because you are in prayagraj. **So the config driven ui give you all the data for that specific location**.

### Lazy Loading?

- Swiggy website using lazy loading, when we scroll to the page more restaurants will come automatically.

# Episode-6.2 | CORS Plugin Issue solved

- **Cors Plugin** cors plugin you put in your laptop but suppose somebody using your website they might have not using cors plugin, they don't know about what is cors.**So let me tell you how can you make this work other people also**.

- So something website is **CORSProxy.io** . this website basically helps to you bypass cors error.

- When you trying to make a api call from one origin to different origin, What do you mean by origin, one domain name to another domain name. Suppose you are making call from **atulsingh.in** domain name to **swissy.com** or you trying to make a api call localhost:1234 to swiggy.com api, so it dose not allow , browser dose not allow , so bypass this cors we have something known as **CORSProxy.io**.

## How to use this CORSProxy.io?

-`https://corsproxy.io/?` this cors proxy url pasted the before api url.

- So what it will do now not directlly going to swiggy website you are going to cors proxy.io and enternally
  it is making and call to swiggy and getting you the data.

  ## infinite scrolling in swiggy website?
