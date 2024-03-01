import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺分类相关/modifyUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessClassificationModificationRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/standardTechnologyCategory/modify",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺分类修改请求DTO */
export interface IStandardProcessClassificationModificationRequestDTO {
    /** 分类id */
    id: string;
    /** 名称 */
    name: string;
    /** 父级分类id, 当添加到第一级时,传递空; */
    parentCategoryId?: string;
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
