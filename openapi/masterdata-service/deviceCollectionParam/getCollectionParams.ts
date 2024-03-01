import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据参数相关/getCollectionParamsUsingGET
*/
export default function fetchMethod(options: { params: { Id?: string; EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListDeviceDataCollectionSelectVO>(
        {
            url: "/masterdata-service/deviceCollectionParam/getCollectionParams",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«设备数采选择VO»» */
export interface IJSONResultListDeviceDataCollectionSelectVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IVOIsSelectedForDeviceDataAcquisition[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设备数采选择VO */
export interface IVOIsSelectedForDeviceDataAcquisition {
    /** 编号 */
    code: string;
    /** 数据类型(number数字 text文本) */
    dataType?: string;
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 单位 */
    unit: string;
    /** 单位类型(quantity数量 time时间) */
    unitType?: string;
}
