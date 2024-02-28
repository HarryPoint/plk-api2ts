import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/区域相关/getAreaTreeUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListAreaTreeReturnsVO>(
        {
            url: "/masterdata-service/area/getAreaTree",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«区域树返回VO»» */
export interface ITheJSONResultListAreaTreeReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAreaTreeReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 区域树返回VO */
export interface IAreaTreeReturnsVO {
    /** id */
    id?: string;
    /** 区域名称 */
    name?: string;
    /** 区域编号 */
    code?: string;
    /** 状态 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 区域子集 */
    children?: IAreaTreeReturnsVO[];
}
