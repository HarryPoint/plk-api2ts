import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/项目报表相关/listProjectRiskTypeUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/masterdata-service/projectReport/listProjectRiskType",
            method: "POST",
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
    /** 项目计划ids */
    projectPlanIds?: string[];
    /** 项目成员id集合 */
    ids?: string[];
    /** undefined */
    projectIds?: string[];
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
