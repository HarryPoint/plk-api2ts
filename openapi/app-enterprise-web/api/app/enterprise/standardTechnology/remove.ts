import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺相关/removeUsingPOST_1
*/
export default function fetchMethod(data: IStandardProcessModificationClassificationRequestObject1, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnology/remove",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 标准工艺修改分类请求对象_1 */
export interface IStandardProcessModificationClassificationRequestObject1 {
    /** 是否删除全部 */
    removeAll?: string;
    /** 标准工艺ids */
    standardTechnologyIds?: number[];
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
    ts?: number;
}
