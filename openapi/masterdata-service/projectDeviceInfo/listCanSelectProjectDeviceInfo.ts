import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/项目设备信息相关/listCanSelectProjectDeviceInfoUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListProjectDeviceInformationResponseObject>(
        {
            url: "/masterdata-service/projectDeviceInfo/listCanSelectProjectDeviceInfo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目设备信息响应对象»» */
export interface IJSONResultListProjectDeviceInformationResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IItemDeviceInformationResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目设备信息响应对象 */
export interface IItemDeviceInformationResponseObject {
    /** 设备编号 */
    code?: string;
    /** 设备状态 */
    deviceStatus?: string;
    /** 设备状态描述 */
    deviceStatusDesc?: string;
    /** 设备信息id */
    id?: string;
    /** 设备型号 */
    model?: string;
    /** 设备名称 */
    name?: string;
}
