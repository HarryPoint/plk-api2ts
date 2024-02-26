import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/进出料设备相关/checkCanSetMoveInDeviceByProduceTaskIdUsingGET
*/
export default function fetchMethod(options: { params: { produceTaskId?: string } }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-mobile-web/api/app/mobile/moveInOutDevice/checkCanSetMoveInDeviceByProduceTaskId",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ('Y' | 'N');
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
