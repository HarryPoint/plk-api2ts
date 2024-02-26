import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目简报相关/checkWeeklyReportUsingGET
*/
export default function fetchMethod(options: { params: { projectId?: number } }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/projectBriefReport/checkWeeklyReport",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ('Y' | 'N');
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
