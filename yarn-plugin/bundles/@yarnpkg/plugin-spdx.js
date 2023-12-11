/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-spdx",
factory: function (require) {
var plugin=(()=>{var Vt=Object.create;var Z=Object.defineProperty;var Ht=Object.getOwnPropertyDescriptor;var qt=Object.getOwnPropertyNames;var Bt=Object.getPrototypeOf,Yt=Object.prototype.hasOwnProperty;var D=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var m=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Le=(e,t)=>{for(var r in t)Z(e,r,{get:t[r],enumerable:!0})},Fe=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of qt(t))!Yt.call(e,i)&&i!==r&&Z(e,i,{get:()=>t[i],enumerable:!(n=Ht(t,i))||n.enumerable});return e};var ke=(e,t,r)=>(r=e!=null?Vt(Bt(e)):{},Fe(t||!e||!e.__esModule?Z(r,"default",{value:e,enumerable:!0}):r,e)),Xt=e=>Fe(Z({},"__esModule",{value:!0}),e);var Se=m(xe=>{"use strict";Object.defineProperty(xe,"__esModule",{value:!0});xe.default=Gt;var jt=zt(D("crypto"));function zt(e){return e&&e.__esModule?e:{default:e}}var J=new Uint8Array(256),Q=J.length;function Gt(){return Q>J.length-16&&(jt.default.randomFillSync(J),Q=0),J.slice(Q,Q+=16)}});var Me=m(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.default=void 0;var Kt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;ee.default=Kt});var N=m(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.default=void 0;var Wt=$t(Me());function $t(e){return e&&e.__esModule?e:{default:e}}function Zt(e){return typeof e=="string"&&Wt.default.test(e)}var Qt=Zt;te.default=Qt});var w=m(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.default=void 0;C.unsafeStringify=Ue;var Jt=er(N());function er(e){return e&&e.__esModule?e:{default:e}}var f=[];for(let e=0;e<256;++e)f.push((e+256).toString(16).slice(1));function Ue(e,t=0){return f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]}function tr(e,t=0){let r=Ue(e,t);if(!(0,Jt.default)(r))throw TypeError("Stringified UUID is invalid");return r}var rr=tr;C.default=rr});var Ve=m(re=>{"use strict";Object.defineProperty(re,"__esModule",{value:!0});re.default=void 0;var nr=sr(Se()),ir=w();function sr(e){return e&&e.__esModule?e:{default:e}}var be,Pe,_e=0,ve=0;function ar(e,t,r){let n=t&&r||0,i=t||new Array(16);e=e||{};let s=e.node||be,o=e.clockseq!==void 0?e.clockseq:Pe;if(s==null||o==null){let l=e.random||(e.rng||nr.default)();s==null&&(s=be=[l[0]|1,l[1],l[2],l[3],l[4],l[5]]),o==null&&(o=Pe=(l[6]<<8|l[7])&16383)}let a=e.msecs!==void 0?e.msecs:Date.now(),d=e.nsecs!==void 0?e.nsecs:ve+1,c=a-_e+(d-ve)/1e4;if(c<0&&e.clockseq===void 0&&(o=o+1&16383),(c<0||a>_e)&&e.nsecs===void 0&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_e=a,ve=d,Pe=o,a+=122192928e5;let u=((a&268435455)*1e4+d)%4294967296;i[n++]=u>>>24&255,i[n++]=u>>>16&255,i[n++]=u>>>8&255,i[n++]=u&255;let h=a/4294967296*1e4&268435455;i[n++]=h>>>8&255,i[n++]=h&255,i[n++]=h>>>24&15|16,i[n++]=h>>>16&255,i[n++]=o>>>8|128,i[n++]=o&255;for(let l=0;l<6;++l)i[n+l]=s[l];return t||(0,ir.unsafeStringify)(i)}var or=ar;re.default=or});var Oe=m(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.default=void 0;var cr=dr(N());function dr(e){return e&&e.__esModule?e:{default:e}}function ur(e){if(!(0,cr.default)(e))throw TypeError("Invalid UUID");let t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=t&255,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=t&255,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=t&255,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=t&255,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=t&255,r}var lr=ur;ne.default=lr});var ye=m(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.URL=O.DNS=void 0;O.default=Dr;var fr=w(),mr=pr(Oe());function pr(e){return e&&e.__esModule?e:{default:e}}function hr(e){e=unescape(encodeURIComponent(e));let t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}var He="6ba7b810-9dad-11d1-80b4-00c04fd430c8";O.DNS=He;var qe="6ba7b811-9dad-11d1-80b4-00c04fd430c8";O.URL=qe;function Dr(e,t,r){function n(i,s,o,a){var d;if(typeof i=="string"&&(i=hr(i)),typeof s=="string"&&(s=(0,mr.default)(s)),((d=s)===null||d===void 0?void 0:d.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let c=new Uint8Array(16+i.length);if(c.set(s),c.set(i,s.length),c=r(c),c[6]=c[6]&15|t,c[8]=c[8]&63|128,o){a=a||0;for(let u=0;u<16;++u)o[a+u]=c[u];return o}return(0,fr.unsafeStringify)(c)}try{n.name=e}catch{}return n.DNS=He,n.URL=qe,n}});var Be=m(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.default=void 0;var Ir=Er(D("crypto"));function Er(e){return e&&e.__esModule?e:{default:e}}function gr(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),Ir.default.createHash("md5").update(e).digest()}var xr=gr;ie.default=xr});var Xe=m(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});se.default=void 0;var Sr=Ye(ye()),Pr=Ye(Be());function Ye(e){return e&&e.__esModule?e:{default:e}}var _r=(0,Sr.default)("v3",48,Pr.default),vr=_r;se.default=vr});var je=m(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.default=void 0;var Or=yr(D("crypto"));function yr(e){return e&&e.__esModule?e:{default:e}}var Ar={randomUUID:Or.default.randomUUID};ae.default=Ar});var Ke=m(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.default=void 0;var ze=Ge(je()),Tr=Ge(Se()),Nr=w();function Ge(e){return e&&e.__esModule?e:{default:e}}function Cr(e,t,r){if(ze.default.randomUUID&&!t&&!e)return ze.default.randomUUID();e=e||{};let n=e.random||(e.rng||Tr.default)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){r=r||0;for(let i=0;i<16;++i)t[r+i]=n[i];return t}return(0,Nr.unsafeStringify)(n)}var wr=Cr;oe.default=wr});var We=m(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});ce.default=void 0;var Rr=Lr(D("crypto"));function Lr(e){return e&&e.__esModule?e:{default:e}}function Fr(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),Rr.default.createHash("sha1").update(e).digest()}var kr=Fr;ce.default=kr});var Ze=m(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.default=void 0;var Mr=$e(ye()),Ur=$e(We());function $e(e){return e&&e.__esModule?e:{default:e}}var br=(0,Mr.default)("v5",80,Ur.default),Vr=br;de.default=Vr});var Qe=m(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.default=void 0;var Hr="00000000-0000-0000-0000-000000000000";ue.default=Hr});var Je=m(le=>{"use strict";Object.defineProperty(le,"__esModule",{value:!0});le.default=void 0;var qr=Br(N());function Br(e){return e&&e.__esModule?e:{default:e}}function Yr(e){if(!(0,qr.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}var Xr=Yr;le.default=Xr});var et=m(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});Object.defineProperty(I,"NIL",{enumerable:!0,get:function(){return Wr.default}});Object.defineProperty(I,"parse",{enumerable:!0,get:function(){return Jr.default}});Object.defineProperty(I,"stringify",{enumerable:!0,get:function(){return Qr.default}});Object.defineProperty(I,"v1",{enumerable:!0,get:function(){return jr.default}});Object.defineProperty(I,"v3",{enumerable:!0,get:function(){return zr.default}});Object.defineProperty(I,"v4",{enumerable:!0,get:function(){return Gr.default}});Object.defineProperty(I,"v5",{enumerable:!0,get:function(){return Kr.default}});Object.defineProperty(I,"validate",{enumerable:!0,get:function(){return Zr.default}});Object.defineProperty(I,"version",{enumerable:!0,get:function(){return $r.default}});var jr=S(Ve()),zr=S(Xe()),Gr=S(Ke()),Kr=S(Ze()),Wr=S(Qe()),$r=S(Je()),Zr=S(N()),Qr=S(w()),Jr=S(Oe());function S(e){return e&&e.__esModule?e:{default:e}}});var vn={};Le(vn,{default:()=>_n});var vt=D("@yarnpkg/cli");var it=ke(D("fs/promises"),1);var g=ke(et(),1),Bn=g.default.v1,Yn=g.default.v3,fe=g.default.v4,Xn=g.default.v5,jn=g.default.NIL,zn=g.default.version,Gn=g.default.validate,Kn=g.default.stringify,Wn=g.default.parse;function me(e){return e.toISOString().split(".")[0]+"Z"}var L=class{created;creators;comment;licenseListVersion;constructor(t,r,n,i){this.created=t,this.creators=r,this.comment=n,this.licenseListVersion=i}static fromDocument(t){return new L(me(t.creationInfo.created),t.creationInfo.creators.map(r=>r.toString()),t.creationInfo.creatorComment??void 0,t.creationInfo.licenseListVersion??void 0)}},y=class{algorithm;checksumValue;constructor(t,r){this.algorithm=t,this.checksumValue=r}static fromChecksum(t){return new y(t.algorithm,t.value)}},F=class{packageVerificationCodeValue;packageVerificationCodeExcludedFiles;constructor(t,r){this.packageVerificationCodeValue=t,this.packageVerificationCodeExcludedFiles=r}static fromPackageVerificationCode(t){return new F(t.value,t.excludedFiles)}},k=class{comment;referenceCategory;referenceLocator;referenceType;constructor(t,r,n,i){this.referenceCategory=t,this.referenceLocator=r,this.referenceType=n,this.comment=i}static fromExternalPackageRef(t){return new k(t.category.toString(),t.locator,t.type,t.comment)}},M=class{name;downloadLocation;SPDXID;filesAnalyzed;packageVerificationCode;checksums;licenseInfoFromFiles;externalRefs;attributionTexts;builtDate;comment;copyrightText;description;homepage;licenseComments;licenseConcluded;licenseDeclared;originator;packageFileName;primaryPackagePurpose;releaseDate;sourceInfo;summary;supplier;validUntilDate;versionInfo;constructor(t,r,n,i,s,o,a,d,c,u,h,l,ge,yt,At,Tt,Nt,Ct,wt,Rt,Lt,Ft,kt,Mt,Ut,bt){this.name=t,this.downloadLocation=r,this.SPDXID=n,this.filesAnalyzed=i,this.packageVerificationCode=s,this.checksums=o,this.licenseInfoFromFiles=a,this.externalRefs=d,this.attributionTexts=c,this.builtDate=u,this.comment=h,this.copyrightText=l,this.description=ge,this.homepage=yt,this.licenseComments=At,this.licenseConcluded=Tt,this.licenseDeclared=Nt,this.originator=Ct,this.packageFileName=wt,this.primaryPackagePurpose=Rt,this.releaseDate=Lt,this.sourceInfo=Ft,this.summary=kt,this.supplier=Mt,this.validUntilDate=Ut,this.versionInfo=bt}static fromPackage(t){let r=t.checksums.length>0?t.checksums.map(s=>y.fromChecksum(s)):void 0,n=t.verificationCode?F.fromPackageVerificationCode(t.verificationCode):void 0,i=t.externalReferences?.length>0?t.externalReferences.map(s=>k.fromExternalPackageRef(s)):void 0;return new M(t.name,t.downloadLocation.toString(),t.spdxId,t.filesAnalyzed,n,r,t.licenseInfoFromFiles.map(s=>s.toString()),i,t.attributionTexts.length>0?t.attributionTexts:void 0,t.builtDate?me(t.builtDate):void 0,t.comment,t.copyrightText?.toString(),t.description,t.homepage?.toString(),t.licenseComment,t.licenseConcluded?.toString(),t.licenseDeclared?.toString(),t.originator?.toString(),t.fileName,t.primaryPackagePurpose?.toString(),t.releaseDate?me(t.releaseDate):void 0,t.sourceInfo,t.summary,t.supplier?.toString(),t.validUntilDate?me(t.validUntilDate):void 0,t.version)}},U=class{spdxElementId;relatedSpdxElement;relationshipType;comment;constructor(t,r,n,i){this.spdxElementId=t,this.comment=i,this.relatedSpdxElement=r,this.relationshipType=n}static fromRelationship(t){return new U(t.spdxElementId,t.relatedSpdxElementId,t.relationshipType)}},b=class{checksum;externalDocumentId;spdxDocument;constructor(t,r,n){this.checksum=t,this.externalDocumentId=r,this.spdxDocument=n}static fromExternalDocumentRef(t){let r=y.fromChecksum(t.checksum);return new b(r,t.documentRefId,t.documentUri)}},V=class{SPDXID;fileName;checksums;attributionTexts;comment;copyrightText;fileContributors;fileTypes;licenseComments;licenseConcluded;licenseInfoInFiles;noticeText;constructor(t,r,n,i,s,o,a,d,c,u,h,l){this.SPDXID=t,this.fileName=r,this.checksums=n,this.attributionTexts=i,this.comment=s,this.copyrightText=o,this.fileContributors=a,this.fileTypes=d,this.licenseComments=c,this.licenseConcluded=u,this.licenseInfoInFiles=h,this.noticeText=l}static fromFile(t){let r=t.checksums.map(s=>y.fromChecksum(s)),n=t.fileTypes.length>0?t.fileTypes.map(s=>s.toString()):void 0,i=t.licenseInfoInFiles.length>0?t.licenseInfoInFiles.map(s=>s.toString()):void 0;return new V(t.spdxId,t.name,r,t.attributionTexts.length>0?t.attributionTexts:void 0,t.comment,t.copyrightText?.toString(),t.contributors.length>0?t.contributors:void 0,n,t.licenseComment,t.licenseConcluded?.toString(),i,t.notice)}},H=class{SPDXID;comment;creationInfo;dataLicense;externalDocumentRefs;name;spdxVersion;documentNamespace;packages;files;relationships;constructor(t,r,n,i,s,o,a,d,c,u,h){this.SPDXID=t,this.spdxVersion=r,this.name=n,this.documentNamespace=i,this.dataLicense=s,this.creationInfo=o,this.packages=a,this.files=d,this.relationships=c,this.externalDocumentRefs=u,this.comment=h}static fromDocument(t){let r=L.fromDocument(t),n=t.packages.length>0?t.packages.map(a=>M.fromPackage(a)):void 0,i=t.files.length>0?t.files.map(a=>V.fromFile(a)):void 0,s=t.relationships.length>0?t.relationships.map(a=>U.fromRelationship(a)):void 0,o=t.creationInfo.externalDocumentRefs?.length>0?t.creationInfo.externalDocumentRefs.map(a=>b.fromExternalDocumentRef(a)):void 0;return new H(t.creationInfo.spdxId,t.creationInfo.spdxVersion,t.creationInfo.name,t.creationInfo.documentNamespace,t.creationInfo.dataLicense,r,n,i,s,o,t.creationInfo.documentComment)}};function tt(e,t){return t.some(r=>e.has(r.spdxId)?!0:(e.add(r.spdxId),!1))}var pe=class{creationInfo;packages;files;relationships;constructor(t,r){this.creationInfo=t,this.packages=r?.packages??[],this.files=r?.files??[],this.relationships=r?.relationships??[]}hasMissingDescribesRelationships(){let t=this.packages.length===1&&this.files.length===0,r=this.relationships.filter(i=>i.relationshipType==="DESCRIBES"),n=this.relationships.filter(i=>i.relationshipType==="DESCRIBED_BY");return!t&&r.length===0&&n.length===0}hasDuplicateSpdxIds(){let t=new Set([this.creationInfo.spdxId]);return tt(t,this.packages)||tt(t,this.files)}collectValidationIssues(){let t=[];return this.creationInfo.spdxVersion!=="SPDX-2.3"&&t.push("Invalid SPDX version. Currently only SPDX-2.3 is supported."),this.hasMissingDescribesRelationships()&&t.push(`Missing DESCRIBES or DESCRIBED_BY relationships.
Document must have at least one DESCRIBES and one DESCRIBED_BY relationship, if there is not exactly one package present.`),this.hasDuplicateSpdxIds()&&t.push("Duplicate SPDX IDs for document, packages or files."),t}async writeFile(t){let r=H.fromDocument(this),n=JSON.stringify(r,null,2);await it.default.writeFile(t,n)}},A;(function(e){e.AMENDS="AMENDS",e.ANCESTOR_OF="ANCESTOR_OF",e.BUILD_DEPENDENCY_OF="BUILD_DEPENDENCY_OF",e.BUILD_TOOL_OF="BUILD_TOOL_OF",e.CONTAINED_BY="CONTAINED_BY",e.CONTAINS="CONTAINS",e.COPY_OF="COPY_OF",e.DATA_FILE_OF="DATA_FILE_OF",e.DEPENDENCY_MANIFEST_OF="DEPENDENCY_MANIFEST_OF",e.DEPENDENCY_OF="DEPENDENCY_OF",e.DEPENDS_ON="DEPENDS_ON",e.DESCENDANT_OF="DESCENDANT_OF",e.DESCRIBED_BY="DESCRIBED_BY",e.DESCRIBES="DESCRIBES",e.DEV_DEPENDENCY_OF="DEV_DEPENDENCY_OF",e.DEV_TOOL_OF="DEV_TOOL_OF",e.DISTRIBUTION_ARTIFACT="DISTRIBUTION_ARTIFACT",e.DOCUMENTATION_OF="DOCUMENTATION_OF",e.DYNAMIC_LINK="DYNAMIC_LINK",e.EXAMPLE_OF="EXAMPLE_OF",e.EXPANDED_FROM_ARCHIVE="EXPANDED_FROM_ARCHIVE",e.FILE_ADDED="FILE_ADDED",e.FILE_DELETED="FILE_DELETED",e.FILE_MODIFIED="FILE_MODIFIED",e.GENERATED_FROM="GENERATED_FROM",e.GENERATES="GENERATES",e.HAS_PREREQUISITE="HAS_PREREQUISITE",e.METAFILE_OF="METAFILE_OF",e.OPTIONAL_COMPONENT_OF="OPTIONAL_COMPONENT_OF",e.OPTIONAL_DEPENDENCY_OF="OPTIONAL_DEPENDENCY_OF",e.OTHER="OTHER",e.PACKAGE_OF="PACKAGE_OF",e.PATCH_APPLIED="PATCH_APPLIED",e.PATCH_FOR="PATCH_FOR",e.PREREQUISITE_FOR="PREREQUISITE_FOR",e.PROVIDED_DEPENDENCY_OF="PROVIDED_DEPENDENCY_OF",e.REQUIREMENT_DESCRIPTION_FOR="REQUIREMENT_DESCRIPTION_FOR",e.RUNTIME_DEPENDENCY_OF="RUNTIME_DEPENDENCY_OF",e.SPECIFICATION_FOR="SPECIFICATION_FOR",e.STATIC_LINK="STATIC_LINK",e.TEST_CASE_OF="TEST_CASE_OF",e.TEST_DEPENDENCY_OF="TEST_DEPENDENCY_OF",e.TEST_OF="TEST_OF",e.TEST_TOOL_OF="TEST_TOOL_OF",e.VARIANT_OF="VARIANT_OF"})(A||(A={}));function rt(e){return typeof e=="string"?e:e instanceof pe?e.creationInfo.spdxId:e.spdxId}var q=class{spdxElementId;relatedSpdxElementId;relationshipType;comment;constructor(t,r,n,i){this.spdxElementId=t,this.relatedSpdxElementId=r,this.relationshipType=n,this.comment=i?.comment}static fromApi(t,r,n,i){return new q(rt(t),rt(r),n,{comment:i?.comment})}},R;(function(e){e.Person="Person",e.Organization="Organization",e.Tool="Tool"})(R||(R={}));var E=class{type;name;email;constructor(t,r,n){if(r===R.Tool&&n)throw new Error("Email must be undefined if actorType is Tool.");this.name=t,this.email=n??void 0,this.type=r}static fromSpdxActor(t){let r=R[t.type];if(!r)throw new Error("Invalid actor type: "+t.type);return new E(t.name,r,t.email)}static fromSpdxActors(t){return Array.isArray(t)?t.map(r=>E.fromSpdxActor(r)):[E.fromSpdxActor(t)]}static tools(){return new E("SPDX Tools TS",R.Tool)}toString(){return this.type.valueOf()+": "+this.name+(this.email?" ("+this.email+")":"")}},Ae;(function(e){e.SHA1="SHA1",e.BLAKE3="BLAKE3",e["SHA3-384"]="SHA3-384",e.SHA256="SHA256",e.SHA384="SHA384",e["BLAKE2b-512"]="BLAKE2b-512",e["BLAKE2b-256"]="BLAKE2b-256",e["SHA3-512"]="SHA3-512",e.MD2="MD2",e.ADLER32="ADLER32",e.MD4="MD4",e["SHA3-256"]="SHA3-256",e["BLAKE2b-384"]="BLAKE2b-384",e.SHA512="SHA512",e.MD6="MD6",e.MD5="MD5",e.SHA224="SHA224"})(Ae||(Ae={}));var P=class{algorithm;value;constructor(t,r){this.algorithm=t,this.value=r}static fromSpdxChecksum(t){let r=Ae[t.checksumAlgorithm];if(!r)throw new Error("Invalid checksum algorithm: "+t.checksumAlgorithm);return new P(r,t.checksumValue)}static fromSpdxChecksums(t){return Array.isArray(t)?t.map(r=>P.fromSpdxChecksum(r)):[P.fromSpdxChecksum(t)]}},he="NOASSERTION",st="NONE",B=class{toString(){return he}},Te=class{toString(){return st}};function x(e,t){let r=n=>n;return e===he?new B:e===st?new Te:t?t(e):r(e)}function en(e){if(!(e instanceof B))throw new Error(`Invalid entry: ${e.toString()} is not allowed.`)}var Ne;(function(e){e.OTHER="OTHER",e["PERSISTENT-ID"]="PERSISTENT-ID",e.PERSISTENT_ID="PERSISTENT_ID",e.SECURITY="SECURITY",e["PACKAGE-MANAGER"]="PACKAGE-MANAGER",e.PACKAGE_MANAGER="PACKAGE_MANAGER"})(Ne||(Ne={}));var Y=class{category;type;locator;comment;constructor(t,r,n,i){this.category=t,this.type=r,this.locator=n,this.comment=i}static fromSpdxExternalPackageRefs(t){return t.map(r=>{let n=Ne[r.referenceCategory];if(!n)throw new Error("Invalid external package reference category: "+r.referenceCategory);return new Y(n,r.referenceType,r.referenceLocator,r.comment)})}},Ce;(function(e){e.APPLICATION="APPLICATION",e.FRAMEWORK="FRAMEWORK",e.LIBRARY="LIBRARY",e.CONTAINER="CONTAINER",e.OPERATING_SYSTEM="OPERATING_SYSTEM",e.DEVICE="DEVICE",e.FIRMWARE="FIRMWARE",e.SOURCE="SOURCE",e.ARCHIVE="ARCHIVE",e.FILE="FILE",e.INSTALL="INSTALL",e.OTHER="OTHER"})(Ce||(Ce={}));function tn(e){let t=Ce[e];if(!t)throw new Error("Invalid package purpose: "+e);return t}function nt(e){if(e)if(typeof e=="string"){let t=x(e);return en(t),t}else{let t=E.fromSpdxActor(e);return rn(t),t}else return}function rn(e){if(e.type!=="Organization"&&e.type!=="Person")throw new Error(`Invalid vendor type: ${e.type}`)}var X=class{name;downloadLocation;spdxId;version;fileName;supplier;originator;filesAnalyzed;verificationCode;checksums;homepage;sourceInfo;licenseConcluded;licenseInfoFromFiles;licenseDeclared;licenseComment;copyrightText;summary;description;comment;externalReferences;attributionTexts;primaryPackagePurpose;releaseDate;builtDate;validUntilDate;constructor(t,r){this.name=t,this.downloadLocation=r?.downloadLocation??new B,this.spdxId=r?.spdxId??"SPDXRef-"+fe(),this.version=r?.version??void 0,this.fileName=r?.fileName??void 0,this.supplier=r?.supplier??void 0,this.originator=r?.originator??void 0,this.filesAnalyzed=r?.filesAnalyzed??!1,this.verificationCode=r?.verificationCode??void 0,this.checksums=r?.checksums??[],this.homepage=r?.homepage??void 0,this.sourceInfo=r?.sourceInfo??void 0,this.licenseConcluded=r?.licenseConcluded??void 0,this.licenseInfoFromFiles=r?.licenseInfoFromFiles??[],this.licenseDeclared=r?.licenseDeclared??void 0,this.licenseComment=r?.licenseComment??void 0,this.copyrightText=r?.copyrightText??void 0,this.summary=r?.summary??void 0,this.description=r?.description??void 0,this.comment=r?.comment??void 0,this.externalReferences=r?.externalReferences??[],this.attributionTexts=r?.attributionTexts??[],this.primaryPackagePurpose=r?.primaryPackagePurpose??void 0,this.releaseDate=r?.releaseDate??void 0,this.builtDate=r?.builtDate??void 0,this.validUntilDate=r?.validUntilDate??void 0}static fromApi(t,r){return new X(t,{spdxId:r?.spdxId,version:r?.version,fileName:r?.fileName,downloadLocation:r?.downloadLocation&&x(r.downloadLocation),supplier:nt(r?.supplier),originator:nt(r?.originator),filesAnalyzed:r?.filesAnalyzed,verificationCode:r?.verificationCode,checksums:r?.checksums&&P.fromSpdxChecksums(r.checksums),homepage:r?.homepage&&x(r.homepage),sourceInfo:r?.sourceInfo,licenseConcluded:r?.licenseConcluded&&x(r.licenseConcluded),licenseInfoFromFiles:r?.licenseInfoFromFiles?.map(n=>x(n)),licenseDeclared:r?.licenseDeclared&&x(r.licenseDeclared),licenseComment:r?.licenseComment,copyrightText:r?.copyrightText&&x(r.copyrightText),summary:r?.summary,description:r?.description,comment:r?.comment,externalReferences:r?.externalReferences&&Y.fromSpdxExternalPackageRefs(r.externalReferences),attributionTexts:r?.attributionTexts,primaryPackagePurpose:r?.primaryPackagePurpose?tn(r.primaryPackagePurpose):void 0,releaseDate:r?.releaseDate,builtDate:r?.builtDate,validUntilDate:r?.validUntilDate})}},j=class{documentRefId;documentUri;checksum;constructor(t,r,n){if(!t.match(/^DocumentRef-[\da-zA-Z.+-]+$/))throw new Error(`DocumentRefId must only contain letters, numbers, ".", "-" and "+", and must start with "DocumentRef-, but is: ${t}.`);this.documentRefId=t,this.documentUri=r,this.checksum=n}static fromApi(t){return new j(t.documentRefId,t.documentUri,P.fromSpdxChecksum({checksumValue:t.checksumValue,checksumAlgorithm:t.checksumAlgorithm}))}};function nn(e){return`SPDX-${e??"2.3"}`}function sn(e){return`urn:${e.replace(/^[^A-Za-z0-9]+/,"").replace(/[^A-Za-z0-9-]/g,"-")||"document"}:${fe()}`}var z=class{spdxVersion;dataLicense="CC0-1.0";spdxId;name;documentNamespace;externalDocumentRefs;licenseListVersion;creators;created;creatorComment;documentComment;constructor(t,r,n,i,s){this.spdxVersion=t,this.name=r,this.documentNamespace=n,this.creators=i,this.created=s?.created??new Date,this.externalDocumentRefs=s?.externalDocumentRefs??[],this.creatorComment=s?.creatorComment??void 0,this.licenseListVersion=s?.licenseListVersion??void 0,this.documentComment=s?.documentComment??void 0,this.spdxId=s?.spdxId??"SPDXRef-DOCUMENT"}static fromApi(t,r){return new z(nn(r?.spdxVersion),t,r?.namespace??sn(t),r?.creators?E.fromSpdxActors(r.creators).concat(E.tools()):[E.tools()],{...r,externalDocumentRefs:r?.externalDocumentRefs?r.externalDocumentRefs.map(n=>j.fromApi(n)):void 0})}},we;(function(e){e.OTHER="OTHER",e.DOCUMENTATION="DOCUMENTATION",e.IMAGE="IMAGE",e.VIDEO="VIDEO",e.ARCHIVE="ARCHIVE",e.SPDX="SPDX",e.APPLICATION="APPLICATION",e.SOURCE="SOURCE",e.BINARY="BINARY",e.TEXT="TEXT",e.AUDIO="AUDIO"})(we||(we={}));function an(e){let t=we[e];if(!t)throw new Error("Invalid file type: "+e);return t}var G=class{name;spdxId;checksums;fileTypes;licenseConcluded;licenseInfoInFiles;licenseComment;copyrightText;comment;notice;contributors;attributionTexts;constructor(t,r,n){this.name=t,this.spdxId=n?.spdxId??"SPDXRef-"+fe(),this.checksums=r,this.fileTypes=n?.fileTypes??[],this.licenseConcluded=n?.licenseConcluded??void 0,this.licenseInfoInFiles=n?.licenseInfoInFiles??[],this.licenseComment=n?.licenseComment??void 0,this.copyrightText=n?.copyrightText??void 0,this.comment=n?.comment??void 0,this.notice=n?.notice??void 0,this.contributors=n?.contributors??[],this.attributionTexts=n?.attributionTexts??[]}static fromApi(t,r,n){return new G(t,P.fromSpdxChecksums(r),{spdxId:n?.spdxId??void 0,fileTypes:n?.fileTypes?n.fileTypes.map(i=>an(i)):void 0,licenseConcluded:n?.licenseConcluded&&x(n.licenseConcluded),licenseInfoInFiles:n?.licenseInfoInFiles?.map(i=>x(i)),licenseComment:n?.licenseComment??void 0,copyrightText:n?.copyrightText&&x(n.copyrightText),comment:n?.comment??void 0,notice:n?.notice??void 0,contributors:n?.contributors??[],attributionTexts:n?.attributionTexts??[]})}},K=class extends pe{static createDocument(t,r){let n=z.fromApi(t,r);return new K(n)}addPackage(t,r){let n=X.fromApi(t,r);return this.packages.push(n),n}addFile(t,r,n){let i=G.fromApi(t,r,n);return this.files.push(i),i}addRelationship(t,r,n,i){let s=q.fromApi(t,r,n,i);return this.relationships.push(s),this}validate(t=!0){let r=this.collectValidationIssues();if(r.length>0){let n="Document is invalid: "+r.join(`
`);if(!t)throw new Error(n);console.error(n)}else console.log("Document is valid")}async write(t,r=!1){this.validate(r),await this.writeFile(t)}writeSync(t,r=!1){this.validate(r),this.writeFile(t).then(()=>{console.log("Wrote SBOM successfully: "+t)}).catch(n=>{console.error("Error writing sample SBOM: "+n)})}};function on(e){return parseInt(e.split(".")[0])}function at(e,t){let r=t?.spdxVersion;if(!r||on(r)===2)return K.createDocument(e,t);throw new Error("Unsupported SPDX version")}var Ot=D("clipanion");var p=D("@yarnpkg/core"),ft=D("@yarnpkg/cli");var W={};Le(W,{_getYarnStateAliases:()=>ut,fs:()=>un,getPackagePath:()=>cn});var _=D("@yarnpkg/core"),ct=D("@yarnpkg/parsers"),v=D("@yarnpkg/fslib"),cn=async(e,t)=>{if(await dn(e),!_.structUtils.isPackageCompatible(t,_.nodeUtils.getArchitectureSet()))return null;let r=_.structUtils.convertPackageToLocator(t),n=_.structUtils.stringifyLocator(r),i=De[n]||dt[n];if(!i)return null;let s=i.locations[0];return s?v.ppath.join(e.cwd,s):e.cwd},De,dt,dn=async e=>{if(!De){let t=v.ppath.join(e.configuration.projectCwd,v.Filename.nodeModules,".yarn-state.yml");De=(0,ct.parseSyml)(await v.xfs.readFilePromise(t,"utf8")),dt=ut(De)}},un=v.xfs,ut=e=>Object.entries(e).reduce((t,[r,n])=>{if(!n.aliases)return t;let i=_.structUtils.parseLocator(r);for(let s of n.aliases){let o=_.structUtils.makeLocator(i,s),a=_.structUtils.stringifyLocator(o);t[a]=n}return t},{});var lt=e=>{switch(e){case"node-modules":return W;default:throw new Error("Unsupported linker: "+e)}};async function mt(e){let t=await p.Configuration.find(e.context.cwd,e.context.plugins),{project:r,workspace:n}=await p.Project.find(t,e.context.cwd);if(!n)throw new ft.WorkspaceRequiredError(r.cwd,e.context.cwd);return await r.restoreInstallState(),[r,n]}function pt(e){let t=e.configuration.get("nodeLinker"),r;return typeof t=="string"?r=lt(t):r=W,r}var ht=e=>{let t=new Set;for(let r of e.workspaces)r.manifest.devDependencies.forEach((n,i)=>{t.add(i)});return t},Dt=async e=>{for(let n of e.workspaces)n.manifest.devDependencies.clear();let t=await p.Cache.find(e.configuration),r=new p.ThrowReport;await e.resolveEverything({report:r,cache:t})},Re=async e=>{let t=new Map,r=e.storedDescriptors.values(),n=p.miscUtils.sortMap(r,[s=>p.structUtils.stringifyIdent(s),s=>p.structUtils.isVirtualDescriptor(s)?"0":"1",s=>s.range]),i=new Set;for(let s of n.values()){let o=e.storedResolutions.get(s.descriptorHash);if(!o)continue;let a=e.storedPackages.get(o);if(!a)continue;let{descriptorHash:d}=p.structUtils.isVirtualDescriptor(s)?p.structUtils.devirtualizeDescriptor(s):s;i.has(d)||(i.add(d),t.set(s,a))}return t};var Ie=D("@yarnpkg/fslib");var ln="SPDXRef-",It="(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/|ssh:\\/\\/|git:\\/\\/|svn:\\/\\/|sftp:\\/\\/|ftp:\\/\\/)?([\\w\\-.!~*'()%;:&=+$,]+@)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+){0,100}\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?",fn="(git|hg|svn|bzr)",mn="(git\\+git@[a-zA-Z0-9\\.\\-]+:[a-zA-Z0-9/\\\\.@\\-]+)",pn="(bzr\\+lp:[a-zA-Z0-9\\.\\-]+)",hn="^((("+fn+"\\+)?"+It+")|"+mn+"|"+pn+")$",Dn=new RegExp(It),In=new RegExp(hn);function En(e){return e&&typeof e=="object"&&gn(e.url)?e.url:e&&typeof e=="object"?void 0:he}function gn(e){return Dn.test(e)&&In.test(e)}function $(e){let t=e.name.replace(/^@/,"").replace(/_/g,"-"),r=e.version.replace(/\//g,".").replace(/_/g,"-");return ln+t+"-"+r}async function Ee(e,t,r,n,i){for(let[,s]of e.entries()){if(!s)continue;let o=await n.getPackagePath(r,s);if(o===null)continue;let a=JSON.parse(await n.fs.readFilePromise(Ie.ppath.join(o,Ie.Filename.manifest),"utf8")),{repository:d}=a,c=En(d),u=$(s);i.has(u)||(i.add(u),t.addPackage(s.name,{...c!==void 0&&{downloadLocation:c},spdxId:u}))}}function Et(e,t,r){for(let[,n]of e.entries()){let i=$(n);r.has(i)&&t.addRelationship(t,i,A.DESCRIBES)}}function gt(e,t,r,n,i){for(let[,s]of e.entries()){let o=$(s);for(let[a,d]of s.dependencies.entries()){if(!i.has(a))continue;let c=St(r,d);!c||!n.has(c)||!n.has(o)||t.addRelationship(c,o,A.DEV_DEPENDENCY_OF)}}}function xt(e,t,r,n){for(let[,i]of e.entries()){let s=$(i);for(let[,o]of i.dependencies.entries()){let a=St(r,o);!a||!n.has(a)||!n.has(s)||t.addRelationship(s,a,A.DEPENDS_ON)}}}function St(e,t){let r=e.storedResolutions.get(t.descriptorHash);if(!r)return;let n=e.storedPackages.get(r);if(!!n)return $(n)}function Pt(e,t){let r=new Map;for(let[n,i]of e.entries())xn(t,n)&&r.set(n,i);return r}function xn(e,t){return!e.includes(t.identHash)}function _t(e,t,r){let n=new Map;for(let[,i]of e.entries())for(let[s,o]of i.dependencies.entries())r.has(s)&&n.set(o,t.get(o));return n}var Sn=".spdx.json",T=class extends vt.BaseCommand{async execute(){let[t,r]=await mt(this),n=pt(t),i=at(r.manifest.name?.name??"spdx"),s=new Set,o=ht(t),a=await Re(t),d=[...a].flatMap(([,l])=>[...l.dependencies].flatMap(([,ge])=>ge.identHash)),c=Pt(a,d),u=_t(c,a,o);await Ee(c,i,t,n,s),Et(c,i,s),await Ee(u,i,t,n,s),gt(c,i,t,s,o),await Dt(t);let h=await Re(t);await Ee(h,i,t,n,s),xt(h,i,t,s),i.writeSync((r.manifest.name?.name??"")+Sn)}};T.paths=[["spdx"]],T.usage=Ot.Command.Usage({description:"Generate SPDX document for the project",details:`
        This command generates an SPDX document for the project. The document will be placed in the root of the project.`,examples:[["Generate SPDX document","$0 spdx"]]});var Pn={commands:[T]},_n=Pn;return Xt(vn);})();
return plugin;
}
};
