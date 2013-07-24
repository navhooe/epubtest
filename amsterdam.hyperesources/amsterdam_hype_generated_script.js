//	HYPE.documents["amsterdam"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "amsterdam.hyperesources";
	var documentName = "amsterdam";
	var documentLoaderFilename = "amsterdam_hype_generated_script.js";
	var mainContainerID = "amsterdam_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"7":{n:"photo4.jpg",p:1},"3":{n:"buil2.jpg",p:1},"4":{n:"people1.jpg",p:1},"0":{n:"sket1.jpg",p:1},"5":{n:"people2.jpg",p:1},"1":{n:"sket2.jpg",p:1},"6":{n:"photo3.jpg",p:1},"2":{n:"buil1.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"2":{aV:8,w:"cover ",a:194,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",c:258,k:"div",z:"1",d:205,aT:8,t:96,b:328,aS:8,aU:8,G:"#000000"},"19":{b:0,z:"2",K:"Solid",c:179,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"4":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:34,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:875.73333333333335},"20":{b:0,z:"2",K:"Solid",c:179,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"},"28":{b:0,z:"3",K:"Solid",c:209,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"Untitled Scene 2",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"3"},{x:2,p:"600px",c:"#FFFFFF",v:{"6":{o:"content-box",h:"1",x:"visible",a:0,q:"100% 100%",b:34,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:874.13333333333333},"21":{b:0,z:"2",K:"Solid",c:179,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"},"32":{b:0,z:"3",K:"Solid",c:209,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"Untitled Scene 3",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"5"},{x:3,p:"600px",c:"#FFFFFF",v:{"8":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:34,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:875.73333333333335},"22":{b:0,z:"2",K:"Solid",c:179,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"},"33":{b:0,z:"3",K:"Solid",c:209,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"Untitled Scene 4",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"7"},{x:4,p:"600px",c:"#FFFFFF",v:{"23":{b:0,z:"2",K:"Solid",c:179,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"},"34":{b:0,z:"3",K:"Solid",c:209,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"10":{o:"content-box",h:"3",x:"visible",a:0,q:"100% 100%",b:34,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:874.13333333333333}},n:"Untitled Scene 5",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"9"},{x:5,p:"600px",c:"#FFFFFF",v:{"12":{o:"content-box",h:"4",x:"visible",a:0,q:"100% 100%",b:34,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:875.73333333333335},"24":{b:0,z:"2",K:"Solid",c:179,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"},"35":{b:0,z:"3",K:"Solid",c:209,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"Untitled Scene 6",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"11"},{x:6,p:"600px",c:"#FFFFFF",v:{"25":{b:0,z:"2",K:"Solid",c:179,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"},"36":{b:0,z:"3",K:"Solid",c:209,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"14":{o:"content-box",h:"5",x:"visible",a:0,q:"100% 100%",b:34,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:874.13333333333333}},n:"Untitled Scene 7",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"13"},{x:7,p:"600px",c:"#FFFFFF",v:{"26":{b:0,z:"2",K:"Solid",c:179,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"},"37":{b:0,z:"3",K:"Solid",c:209,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"},"16":{o:"content-box",h:"6",x:"visible",a:0,q:"100% 100%",b:34,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:875.73333333333335}},n:"Untitled Scene 8",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"15"},{x:8,p:"600px",c:"#FFFFFF",v:{"18":{o:"content-box",h:"7",x:"visible",a:0,q:"100% 100%",b:34,j:"absolute",r:"inline",c:640,k:"div",z:"1",d:874.13333333333333},"27":{b:0,z:"2",K:"Solid",c:179,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:1}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:447,y:"preserve",J:"Solid"},"38":{b:0,z:"3",K:"Solid",c:209,L:"Solid",d:946,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:[{type:1,transition:2,sceneSymbol:2}],F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:0,y:"preserve",J:"Solid"}},n:"Untitled Scene 9",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"17"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

