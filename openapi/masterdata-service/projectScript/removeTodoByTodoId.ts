import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/project-script-controller/removeTodoByTodoIdUsingGET
*/
export default function fetchMethod(options: { params: { apiSystem?: EapiSystem; enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/projectScript/removeTodoByTodoId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EapiSystem {
    KING_DEE_YXC = "KING_DEE_YXC",
    KING_DEE_YCQ = "KING_DEE_YCQ",
    KING_DEE_YZJ_PROJECT = "KING_DEE_YZJ_PROJECT",
    KING_DEE_YZJ_QHSE = "KING_DEE_YZJ_QHSE"
}
