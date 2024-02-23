import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产任务相关/saveMoveOutDetailUsingPOST
export default function fetchMethod(data: IInboundAndOutboundInformationDTO1, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceTask/saveMoveOutDetail",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 进出站信息DTO_1
export interface IInboundAndOutboundInformationDTO1 {
    // 进出站记录id - 如果是从进出站记录里面点进来的，则必传
    moveInOutRecordId: number;
    // 生产任务id
    produceTaskId: number;
    // 批次id
    lotOrderId: number;
    // wip状态记录id
    wipRpId: number;
    // 成品物料信息
    finishedMaterial: IFillInTheDTOForFinishedMaterials;
    // BOM物料信息列表
    bomMaterials: IBOMEnterTheDTOForTheMaterial[];
    // 关键参数信息填写
    keyParametersInfo: IEntryAndExitProcessCardFilling;
}
// 成品物料填写DTO
export interface IFillInTheDTOForFinishedMaterials {
    // 实际数(质检数)
    actualQuantity: number;
    // 再次申请质检数
    applyQualityAgainQuantity: number;
}
// BOM物料填写DTO
export interface IBOMEnterTheDTOForTheMaterial {
    // 生产工艺路径步骤bom明细关联id
    id: number;
    // 对应物料id
    materialId: number;
    // 实际数
    actualQuantity: number;
}
// 进出站工艺卡填写
export interface IEntryAndExitProcessCardFilling {
    // 关键参数id
    id: number;
    // 录入集合 - 带录入信息
    keyParameterDetailList: IDetailsOnKeyParameters[];
}
// 关键参数明细填写信息
export interface IDetailsOnKeyParameters {
    // 明细id
    id: number;
    // 录入值 - 明细录入类型不是图片时，有值
    inputValue: string;
    // 图片上传key集合 - 明细录入类型是图片时，有值
    imageKeys: string[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
