import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺分类相关/resetCategorySortUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessClassificationSortRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/standardTechnologyCategory/resetCategorySort",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺分类排序请求DTO */
export interface IStandardProcessClassificationSortRequestDTO {
    /** 分类id */
    id: string;
    /** 父级分类id, 当移动到第一级时,传递空; */
    parentCategoryId?: string;
    /** 移动后所处父级分类下的第几个位置 */
    sort: number;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
