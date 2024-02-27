import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目报表相关/listProjectRiskTypeUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/masterdata-service/projectReport/listProjectRiskType",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目名称编号公共查询对象 */
export interface IItemNameNumberPublicQueryObject {
    /** 名称or编号 */
    nameOrCode?: string;
    /** 条数 */
    limit?: number;
    /** undefined */
    ids?: string[];
    /** undefined */
    projectIds?: string[];
    /** undefined */
    projectPlanIds?: string[];
    /** undefined */
    statusList?: string[];
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
