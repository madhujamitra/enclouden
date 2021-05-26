import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export const USER_DETAILS = 'USER_DETAILS'
export const USER_COMMENTS = 'USER_COMMENTS'
export const LOGGED_IN_USER = 'LOGGED_IN_USER'


declare var db: any

@Injectable({
  providedIn: 'root'
})
export class DatadisplayService {
  public storagename = "alldata";
  constructor() { }

  add(username, password) {
    return new Promise((resolve, reject) => {
      const request = db.transaction([this.storagename], "readwrite")
        .objectStore(this.storagename).put(username, password);

      request.onsuccess = function (event) {
        if (event.target.result) {
          console.log("success")
        } else {
          console.log("error")
        }
      }
    })
  }


  // getLocalData() {
  //   return this.http.get(this._url);
  // }

  login(userDetails) {
    let getUerDetails = localStorage.getItem(USER_DETAILS)
    let parseData = JSON.parse(getUerDetails)
    let isUserPresent = parseData?.filter(details => details.userName === userDetails.userName && details.userName === userDetails.password)

    return isUserPresent

  }

  postLocalData(userEnterDetails) {
    let userData = []
    let getUserData = localStorage.getItem(USER_DETAILS)

    if (getUserData) {
      userData = JSON.parse(getUserData)
      userData.push(userEnterDetails)
    } else {
      userData.push(userEnterDetails)
    }

    localStorage.setItem(USER_DETAILS, JSON.stringify(userData))

    return true
  }

  getComment(uerDetails) {

    let userDetails = JSON.parse(uerDetails)
    let currentUser = userDetails.userName
    let getCommentDetails = localStorage.getItem(USER_COMMENTS)
    let getCommentDetailsParse = JSON.parse(getCommentDetails)
    let relatedComments = getCommentDetailsParse.filter(comments => comments.userName === currentUser)

    return relatedComments[0]?.comments?.question

  }



}
