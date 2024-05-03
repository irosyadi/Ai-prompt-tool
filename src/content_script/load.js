import { AiPrompt as SomeAiPrompt } from './main'
import { OpenAiPrompt, ClaudeAiPrompt, BingAiPrompt, GeminiAiPrompt, BaiduAiPrompt, ErnieAiPrompt } from "./aiList";


window.onload = ()=>{
  let prevCheck = ()=>document.querySelector('textarea'), AiPrompt;
  
  if (window.location.hostname ==='chatgpt.com'){
    AiPrompt = OpenAiPrompt;
  } else if(window.location.hostname === 'claude.ai'){
    prevCheck = ()=>document.querySelector('div[contenteditable=true]');
    AiPrompt = ClaudeAiPrompt;
  } else if (window.location.hostname === 'www.bing.com') {
    prevCheck = ()=>document.querySelector('.cib-serp-main');
    AiPrompt = BingAiPrompt;
  } else if(window.location.hostname === 'gemini.google.com'){
    prevCheck = ()=>document.querySelector('div[contenteditable=true][role=textbox]');
    AiPrompt = GeminiAiPrompt;
  } else if (window.location.hostname === 'chat.baidu.com'){
    prevCheck = ()=>document.querySelector('div[contenteditable=true]');
    AiPrompt = BaiduAiPrompt; // 百度搜索AI伙伴
  }else if (window.location.hostname === 'yiyan.baidu.com'){
    prevCheck = ()=>document.querySelector('div[contenteditable=true]');
    AiPrompt = ErnieAiPrompt // 文心一言
  }else {
    AiPrompt = SomeAiPrompt
  }

  new Promise(resolve=>{
    if (prevCheck()){
      resolve();
    }else {
      let mutationObserver = new MutationObserver((mutationRecords, observer)=>{
        if (prevCheck()){
          resolve();
          cancelObserver(); // 停止观察但可以通过observer.observe重新启用
        }
      });
      const cancelObserver = ()=>{
        mutationObserver.disconnect();
        mutationObserver = null;
        clearTimeout(timer);
      }
      const timer = setTimeout(cancelObserver, 1800000); // 监听半小时后还没有，可能就没这个功能，故取消监听。
      mutationObserver.observe(document.body, {childList: true}); // 监听动作
    }
  }).then(()=>{
    new AiPrompt();
  }).catch(err=>{
    alert('Ai Prompt加载出错');
    console.warn(err);
  })
}