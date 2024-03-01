import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务分配相关/getOperateUserListByProcessIdUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; ProcessId?: string } }, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/masterdata-service/produceTaskAssign/getOperateUserListByProcessId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，名称，编号VO»» */
export interface IJSONResultListIdNameNumberVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIdNameNumberVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** 编号 */
    code: string;
    /** id */
    id: string;
    /** 名称 */
    name: string;
}
