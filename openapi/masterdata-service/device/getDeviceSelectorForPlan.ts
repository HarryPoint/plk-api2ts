import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备相关/getDeviceSelectorForPlanUsingGET
*/
export default function fetchMethod(params: { enterpriseId: number }, extraOptions?: any) {
    return http<ITheJSONResultListDeviceSelectsToReturnVOForTheDataCollectionScheme>(
        {
            url: "/masterdata-service/device/getDeviceSelectorForPlan",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«设备选择返回VO - 针对数采方案»» */
export interface ITheJSONResultListDeviceSelectsToReturnVOForTheDataCollectionScheme {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IDeviceSelectionReturnsVOForDataAcquisitionScheme[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 设备选择返回VO - 针对数采方案 */
export interface IDeviceSelectionReturnsVOForDataAcquisitionScheme {
    /** id */
    id: number;
    /** 设备名称 */
    name: string;
    /** 设备编号 */
    code: string;
    /** 设备数采方案id，如果该参数有值，则不能被选择 */
    deviceCollectionPlanId: number;
}
