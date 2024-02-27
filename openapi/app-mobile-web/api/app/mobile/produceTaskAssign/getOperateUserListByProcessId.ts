import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/生产任务分配相关/getOperateUserListByProcessIdUsingGET
*/
export default function fetchMethod(options: { params: { processId?: string } }, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTaskAssign/getOperateUserListByProcessId",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，名称，编号VO»» */
export interface IJSONResultListIdNameNumberVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdNameNumberVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
