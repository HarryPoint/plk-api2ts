import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/项目任务相关/saveChildTaskUsingPOST
*/
export default function fetchMethod(data: IMasterDataBaseEditDTO1, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-mobile-web/api/app/mobile/kaizenProjectTask/saveChildTask",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 主数据基础编辑 DTO_1 */
export interface IMasterDataBaseEditDTO1 {
    /** 编辑数据 */
    data: Record<string, Record<string, any>>;
    /** 流程任务id - 新增/重新编辑业务，要设置为null */
    flowPathTaskId: number;
    /** 扩展参数 */
    extensionParam: Record<string, Record<string, any>>;
    /** 上级任务ID */
    parentId: number;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
