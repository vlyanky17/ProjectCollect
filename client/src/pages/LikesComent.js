import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";



export const LikesComent = () => {


    return(<div>
        <table class="resp-tab">
        <thead>
        <tr>

        <th>комментарии</th>
        <th>лайки</th>
        </tr>
        </thead>
        <tbody>

        </tbody>


        <form class="form-2">
        <input type="submit" name="submit" value="отправить"/>
        </form>
        </table>
        </div>
)
}

export default LikesComent;