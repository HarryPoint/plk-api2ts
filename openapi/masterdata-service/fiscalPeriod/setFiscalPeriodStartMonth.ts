import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/财务期间相关/setFiscalPeriodStartMonthUsingPOST
*/
export default function fetchMethod(data: ISetTheStartMonthRequestDuringThePeriod, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/fiscalPeriod/setFiscalPeriodStartMonth",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 设置期间开始月份Request */
export interface ISetTheStartMonthRequestDuringThePeriod {
    /** ID */
    startMonth?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
