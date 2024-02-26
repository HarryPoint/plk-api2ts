import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/行业相关/listAllUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListIndustryResponseObjectDTO>(
        {
            url: "/plk-uaa-service/industry/listAll",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«行业响应对象DTO»» */
export interface IJSONResultListIndustryResponseObjectDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIndustryResponseObjectDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 行业响应对象DTO */
export interface IIndustryResponseObjectDTO {
    /** 行业id */
    id?: number;
    /** 父级行业id */
    parentId?: number;
    /** 行业名称 */
    name?: string;
    /** 排序 */
    sort?: number;
    /** 子行业列表 */
    children?: IIndustryResponseObjectDTO[];
}
