import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目成员相关/queryEmployeeByNameOrCodeUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject1 }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/masterdata-service/projectMember/queryEmployeeByNameOrCode",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目名称编号公共查询对象_1 */
export interface IItemNameNumberPublicQueryObject1 {
    /** 名称or编号 */
    nameOrCode?: string;
    /** 项目id */
    projectId?: string;
    /** 项目计划id */
    projectPlanId?: string;
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
