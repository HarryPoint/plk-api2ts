import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/kaizen项目任务相关/saveTaskUsingPOST
export default function fetchMethod(data: IMasterDataBaseEditDTO2) {
    return http<IJSONResultlong>({
        url: "/masterdata-service/kaizenProjectTask/saveTask",
        method: "post",
        data,
    });
}
// 主数据基础编辑 DTO_2
export interface IMasterDataBaseEditDTO2 {
    // 子任务列表
    childTaskList: IJSONObject[];
    // 编辑数据
    data: Record<string, Record<string, any>>;
    // 流程任务id - 新增/重新编辑业务，要设置为null
    flowPathTaskId: number;
    // 扩展参数
    extensionParam: Record<string, Record<string, any>>;
}
// JSONObject
export interface IJSONObject {
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
