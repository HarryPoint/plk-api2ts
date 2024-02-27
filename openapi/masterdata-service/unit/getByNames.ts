import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/单位相关/getByNamesUsingPOST
*/
export default function fetchMethod(options: { data: string[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListUnitReturnsVO>(
        {
            url: "/masterdata-service/unit/getByNames",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«单位返回VO»» */
export interface ITheJSONResultListUnitReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IUnitReturnVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 单位返回VO */
export interface IUnitReturnVO {
    /** id */
    id?: string;
    /** 单位名称 */
    name?: string;
    /** 单位编码 */
    code?: string;
}
