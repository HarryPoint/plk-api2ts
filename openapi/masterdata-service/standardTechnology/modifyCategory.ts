import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺相关/modifyCategoryUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessModificationClassificationRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/standardTechnology/modifyCategory",
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
    /** 标准工艺分类id -- 为空就是不分类了 */
    standardTechnologyCategoryId?: string;
    /** 标准工艺ids */
    standardTechnologyIds?: string[];
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

export enum EStandardProcessModificationClassificationRequestObject_modifyAll {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
