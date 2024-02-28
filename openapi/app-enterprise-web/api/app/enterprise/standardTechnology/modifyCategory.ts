import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺相关/modifyCategoryUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessModificationClassificationRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnology/modifyCategory",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺修改分类请求对象 */
export interface IStandardProcessModificationClassificationRequestObject {
    /** 是否修改全部 */
    modifyAll?: EStandardProcessModificationClassificationRequestObject_modifyAll;
    /** 标准工艺ids */
    standardTechnologyIds?: string[];
    /** 标准工艺分类id -- 为空就是不分类了 */
    standardTechnologyCategoryId?: string;
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

export enum EStandardProcessModificationClassificationRequestObject_modifyAll {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
