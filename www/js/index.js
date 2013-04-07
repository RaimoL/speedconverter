/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);

        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};
function countspeed() {
	countdestime();
	var speedms=document.getElementById("lega").value/document.getElementById("starttah").value;
	document.getElementById("speeda").value=round(10*speedms)/10;
	document.getElementById("starttah").value=Math.floor(document.getElementById("starttah").value);
	speedms=speedms/3.6;
	var speedmm=60*speedms;
	var speedmkm=1000/speedmm;
	var speedmkmm=Math.floor(speedmkm);
	var speedmkms=Math.floor(60*(parseFloat(speedmkm)-parseFloat(speedmkmm))+0.0001);
	document.getElementById("speedm").value=toString(round(10*speedms)/10)+" m/s, "+toString(round(speedmm))+" m/min, "+toString(speedmkmm)"+":"+toString(speedmkms)+" min/km";
};

function counttime() {
       	document.getElementById("starttah").value=document.getElementById("lega").value/document.getElementById("speeda").value;
	countinttime();
};
function countleg() {
 	countdestime();
       	document.getElementById("lega").value=round(10*document.getElementById("starttah").value*document.getElementById("speeda").value)/10;
	document.getElementById("starttah").value=Math.floor(document.getElementById("starttah").value);
};
function countdestime() {
       	document.getElementById("starttah").value=parseFloat(document.getElementById("starttah").value)+parseFloat(document.getElementById("starttam").value/60)+parseFloat(document.getElementById("starttas").value/3600);
};
function countinttime() {
       	var hh=Math.floor(document.getElementById("starttah").value);
 	var mmmm=60*(parseFloat(document.getElementById("starttah").value)-parseFloat(hh));
 	var mm=Math.floor(mmmm);
 	document.getElementById("starttas").value=Math.floor(60*(parseFloat(mmmm)-parseFloat(mm))+0.00001);
	if (document.getElementById("starttas").value=60)
		{
		document.getElementById("starttas").value=0;
		}
 	document.getElementById("starttah").value=hh;
 	document.getElementById("starttam").value=Math.floor(mmmm+0.00001);
};
