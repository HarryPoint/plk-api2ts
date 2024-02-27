import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/标准工艺分类相关/addUsingPOST_8
*/
export default function fetchMethod(options: { data: INewRequestDTOForStandardProcessClassification }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/standardTechnologyCategory/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺分类新增请求DTO */
export interface INewRequestDTOForStandardProcessClassification {
    /** 父级分类id */
    parentCategoryId?: string;
    /** 分类名称 */
    name: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
