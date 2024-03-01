import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/行业相关/listAllUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListIndustryResponseObjectDTO>(
        {
            url: "/plk-uaa-service/industry/listAll",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«行业响应对象DTO»» */
export interface IJSONResultListIndustryResponseObjectDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIndustryResponseObjectDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 行业响应对象DTO */
export interface IIndustryResponseObjectDTO {
    /** 子行业列表 */
    children?: IIndustryResponseObjectDTO[];
    /** 行业id */
    id?: string;
    /** 行业名称 */
    name?: string;
    /** 父级行业id */
    parentId?: string;
    /** 排序 */
    sort?: number;
}
