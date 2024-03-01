import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目计划相关/queryProjectPlanUsingPOST
*/
export default function fetchMethod(options: { data: ITheProjectPlansToApplyResponseObject1 }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/masterdata-service/projectPlan/queryProjectPlan",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目计划应用响应对象_1 */
export interface ITheProjectPlansToApplyResponseObject1 {
    /** 项目计划名称Or编号 */
    nameOrCode?: string;
    /** 项目id */
    projectId: string;
}
/** JSONResult«List«Id Code Name 通用传输对象»» */
export interface IJSONResultListIdCodeNameACommonTransferObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIdCodeNameGenericTransportObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** code */
    code?: string;
    /** id */
    id?: string;
    /** name */
    name?: string;
}
