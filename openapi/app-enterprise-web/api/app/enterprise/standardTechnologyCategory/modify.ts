import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺分类相关/modifyUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessClassificationModificationRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnologyCategory/modify",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺分类修改请求DTO */
export interface IStandardProcessClassificationModificationRequestDTO {
    /** 父级分类id, 当添加到第一级时,传递空; */
    parentCategoryId?: string;
    /** 分类id */
    id: string;
    /** 名称 */
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
