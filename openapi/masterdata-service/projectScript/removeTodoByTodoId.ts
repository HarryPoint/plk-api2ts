import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/project-script-controller/removeTodoByTodoIdUsingGET
*/
export default function fetchMethod(options: { params: { ApiSystem?: EApiSystem; EnterpriseId?: string; Id?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/projectScript/removeTodoByTodoId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EApiSystem {
    KING_DEE_YXC = "KING_DEE_YXC",
    KING_DEE_YCQ = "KING_DEE_YCQ",
    KING_DEE_YZJ_PROJECT = "KING_DEE_YZJ_PROJECT",
    KING_DEE_YZJ_QHSE = "KING_DEE_YZJ_QHSE"
}
