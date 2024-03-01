import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/单位相关/getByNamesUsingPOST
*/
export default function fetchMethod(options: { data: string[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListUnitReturnsVO>(
        {
            url: "/masterdata-service/unit/getByNames",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«单位返回VO»» */
export interface ITheJSONResultListUnitReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IUnitReturnVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 单位返回VO */
export interface IUnitReturnVO {
    /** 单位编码 */
    code?: string;
    /** id */
    id?: string;
    /** 单位名称 */
    name?: string;
}
