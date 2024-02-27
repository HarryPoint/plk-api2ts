import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目计划相关/queryProjectPlanUsingPOST
*/
export default function fetchMethod(options: { data: ITheProjectPlansToApplyResponseObject1 }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/masterdata-service/projectPlan/queryProjectPlan",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目计划应用响应对象_1 */
export interface ITheProjectPlansToApplyResponseObject1 {
    /** 项目id */
    projectId: string;
    /** 项目计划名称Or编号 */
    nameOrCode?: string;
}
/** JSONResult«List«Id Code Name 通用传输对象»» */
export interface IJSONResultListIdCodeNameACommonTransferObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdCodeNameGenericTransportObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: string;
    /** code */
    code?: string;
    /** name */
    name?: string;
}
