import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/质检项/getByIdUsingGET_17
export default function fetchMethod(params: { id?: number }, extraOptions?: any) {
    return http<IJSONResultCheckItemDetailsVOIsReturned>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qualityInspectionItem/getById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«质检项详细返回VO»
export interface IJSONResultCheckItemDetailsVOIsReturned {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICheckItemDetailsAreReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质检项详细返回VO
export interface ICheckItemDetailsAreReturnedToVO {
    // id
    id: number;
    // 质检项名称
    name: string;
    // 质检项编号
    code: string;
    // 质检方式
    qualityMethod: string;
    // 质检方式描述
    qualityMethodDesc: string;
    // 选择方式
    selectType: string;
    // 选择方式描述
    selectTypeDesc: string;
    // 备注
    remark: string;
    // 附件文件id
    attachedFileId: number;
    // 附件文件key
    attachedFileKey: string;
    // 附件文件完整路径
    attachedFileUrl: string;
    // 附件文件名
    attachedFileName: string;
    // 选项内容集合
    selectors: ITheInspectionItemOptionReturnsVO[];
}
// 质检项选择项返回VO
export interface ITheInspectionItemOptionReturnsVO {
    // 选择项名称
    name: string;
}
