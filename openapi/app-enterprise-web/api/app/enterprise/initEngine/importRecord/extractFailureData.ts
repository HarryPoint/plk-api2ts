import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入记录相关/extractFailureDataUsingPOST
*/
export default function fetchMethod(data: IExtractFailureDataRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/importRecord/extractFailureData",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** ExtractFailureDataRequestDTO */
export interface IExtractFailureDataRequestDTO {
    /** 导入记录的ID */
    id?: number;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
