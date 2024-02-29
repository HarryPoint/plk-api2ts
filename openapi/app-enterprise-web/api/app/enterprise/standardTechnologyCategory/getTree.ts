import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺分类相关/getTreeUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListStandardProcessClassificationTreeRespondsToDtos>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnologyCategory/getTree",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«标准工艺分类树响应DTO»» */
export interface IJSONResultListStandardProcessClassificationTreeRespondsToDtos {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IStandardProcessClassificationTreeRespondsToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 标准工艺分类树响应DTO */
export interface IStandardProcessClassificationTreeRespondsToDTO {
    /** 分类id */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 父级分类id */
    parentCategoryId?: string;
    /** 排序 */
    sort?: number;
    /** 子分类列表 */
    childCategoryList?: IStandardProcessClassificationTreeRespondsToDTO[];
}
