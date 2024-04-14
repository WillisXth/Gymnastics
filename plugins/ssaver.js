/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．2．2                                                   // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @infoription : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.2 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
   * plugin date : 10/6/2023
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/




const { 
   smd, 
   botpic,
   send,
   Config, 
   tlang, 
   sleep,
   smdBuffer,
   prefix,
   bot_
   } = require('../lib')
   const axios = require('axios')
let SuhailTechInfo = "Owner";




/*
{
   pattern :"ssaver",
   alias : ["ssaver"],
   type: "ssaver",
   filename: __filename,
}
 */

smd({  pattern: "#",
      alias : ["ssaver"],         
      desc: "Save whatsapp status",
      category: "whatsapp",         
      filename: __filename,
      use:"< status >",
   },async(message) => {
      try{
         let mm = message.reply_message && message.reply_message.status? message.reply_message : false;
         if(mm ){ message.bot.forwardOrBroadCast(message.user, mm, { quoted :{key : mm.key, message:mm.message} })  } 
         else message.send("*reply to whatsapp status*")
      }catch(e){await message.error(`${e}\n\ncommand : #(Status Saver)`, e ,false )}
})
//========================= [ SAVE STORY BY REPLYING (send,give) ] =========================\\
const regexSend = new RegExp(`\\b(?:${["send", "share", "snd", "give","save", "sendme","forward"].join('|')})\\b`, 'i');
smd(
   { on: "quoted"  },
   async(message,text) => {
      try{
         let mm =  message.reply_message.status? message.reply_message : false;
         if(mm && regexSend.test(text.toLowerCase()) ){
            message.bot.forwardOrBroadCast(message.fromMe? message.user : message.from, mm,{ quoted :{key : mm.key, message:mm.message} })
         }
      }catch(e){console.log(e)}
})


//========================= [ WAPRESENCE & READ MSGS ] =========================\\
global.waPresence = process.env.WAPRESENCE && process.env.WAPRESENCE === "online" ? "available" : process.env.WAPRESENCE  ||  "" ;
// global.readmessage = process.env.READ_MESSAGE || global.readmessage || "false"; 
// global.readmessagefrom = process.env.READ_MESSAGE_FROM || global.readmessagefrom || "false"; 
// global.readcmds = process.env.READ_COMMAND || global.readcmds || "true" 
global.YT_PROMOTE = "_https://youtube.com/@suhailtechfree_\n*FOLLOW ME:* _tiktok.com/@itx.suhail.0_" // PAID PROMOTION TO GET YOUTUBE SUBSCRIBERS

global.api_smd = "https://api-smd.onrender.com" //"https://api-smd-1.vercel.app" EXPIRED VERCEL








//********* EID IMAGES THEME FOR EID DAYS ************
// global.userImages = `https://telegra.ph/file/b04277d08a02ea28bd2d5.jpg, 
// https://telegra.ph/file/3f75935dbc062774a13e1.jpg,
// https://telegra.ph/file/74693953bff473b25ed5d.jpg,
// https://telegra.ph/file/d16ae8ebaa32c3e0f8a88.jpg,
// https://telegra.ph/file/d0e7aec6bccb83c3516bb.jpg,
// https://telegra.ph/file/63cf1e7ebd91a53d0624c.jpg,
// https://telegra.ph/file/b3090aa04399c17347ebf.jpg,
// https://telegra.ph/file/180edd480d33e69ecedce.jpg,
// https://telegra.ph/file/ac8c26b25ae11eae6401e.jpg,
// `.replace(/\n/g,"").trim()
//*****************************************************













let status = false,times = 0;
smd(
   { on: "main" },
   async(message,text,{icmd}) => {
      try{
         if(!status){     // && times<2){
           try {
               // let { data } = await axios.get(`${api_smd}/bot/addUser?id=Suhail-Md&number=${message.user.split("@")[0]}`)
              status  = true // data && data.success ? true : false; times = status ? 10 : times+1  //console.log({data, status , times })
            } catch (e) { /*console.log(e) */}
         }
         
         if(message.status) return
         if(`${global.readmessagefrom}`.includes(message.senderNum) || ["yes","true","ok","sure"].includes(global.readmessage) || (icmd && ["yes","true","ok","sure"].includes(global.readcmds)) ) message.bot.readMessages([message.key]) 
      }catch(e){console.log(e)}
})



smd(
   { on: "text" },
   async(message,text,{icmd}) => {
      try{
         if(['unavailable' , 'available' ,'composing','recording','paused'].includes(waPresence)) message.bot.sendPresenceUpdate(waPresence, message.from) 
         if(message.isSuhail && !message.fromMe && !message.text.startsWith("$")  ) message.react("👑")
      }catch(e){console.log(e)}
})







//========================= [ SAVE & READ STORY ] =========================\\
// global.read_status =  process.env.AUTO_READ_STATUS || global.read_status || "false"; 
// global.save_status =  process.env.AUTO_SAVE_STATUS || global.save_status || "false";
// global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
// global.read_status_from =  process.env.READ_STATUS_FROM  || global.read_status_from || "923184474176";
smd(
   { on: "status" },
   async(message,text) => {
      try{
         if(`${global.read_status_from}`.split(",").includes(message.key.participant.split("@")[0]) || ["yes","true","ok","sure"].includes(global.read_status) || message.fromMe || message.isSuhail) { await message.bot.readMessages([{... message.key,fromMe:false}]) }
         if(( `${global.save_status_from}`.split(",").includes(message.key.participant.split("@")[0]) ||  ["yes","true","ok","sure"].includes(global.save_status) )&& !message.fromMe){
            await message.bot.forwardOrBroadCast(message.user , message,{ quoted :{key : message.key, message:message.message}, })
         }
      }catch(e){console.log(e)}
})




//========================= [ SMD USERS ] =========================\\

smd(
   {
      cmdname: "smd",         
      desc: "total Users Currently using suhail MD",
   },
   async(message,text) => {
      try{
         
      //   let get24 = false,txt = ""
      //   try{
      //    // let {data} = await axios.get(`${api_smd}/bot/get24?id=Suhail-Md&type=t`)
      //    // get24 =  data.total || false 
      //   }catch(e){}

      //  // if(/t/g.test(text)){
      //    // txt = get24 ? `\`${get24}\` Users are Active in last 24Hours`  : ""
      //  // } 



         let { data } = await axios.get(`${api_smd}/bot/getUser?id=Suhail-Md`)
         if(data && data.success) return await message.reply(`*Currently "${data.total || data.length || "-INFINITY-"}" Users have Suhail MD!*`.trim())
         else message.reply(`*No Data FOUNd!* `)
      }catch (e) {
         console.error("Error:", e);
         message.reply(`*ERROR!* `)
      }
})



/*
{
   pattern: "ssaver",
   type: "notes",
}
*/
