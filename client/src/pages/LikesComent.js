import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Aut.css';
import {useHttp} from "../hooks/http.hook";



export const LikesComent = () => {


    return(<div>
        <table class="resp-tab">
        <thead>
        <tr>

        <th> <form class="form-2"> комментарии   <input type="text" id="comen" name="comen" placeholder="comen "  />  <button>  отправить</button>  </form> </th>
        <th>лайки</th>
        </tr>
        </thead>
        <tbody>



        </tbody>



        </table>


        </div>
)
}

export default LikesComent;