import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶即时库存查询相关/getStorehousePurposeListUsingPOST
*/
export default function fetchMethod(options: { params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultListNameNumberVO>(
        {
            url: "/masterdata-service/baoJingWarehouseMaterial/getStorehousePurposeList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«名称，编号VO»» */
export interface IJSONResultListNameNumberVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: INameNumberVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 名称，编号VO */
export interface INameNumberVO {
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
