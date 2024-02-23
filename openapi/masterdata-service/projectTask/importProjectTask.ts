import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/项目任务相关/importProjectTaskUsingPOST
export default function fetchMethod(data: IProjectTaskImportRequestDTO, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/projectTask/importProjectTask",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 项目任务导入请求DTO
export interface IProjectTaskImportRequestDTO {
    // 项目计划id
    projectPlanId: number;
    // 导入文件id
    importFileId: string;
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
